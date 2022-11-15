import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllProducts } from '../../store/products';
import './SearchBar.css'

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const productsObj = useSelector(state => state.session.products)
  const [keyword, setKeyword] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSearch = async (e) => {
    e.preventDefault()
    if (keyword.trim().length === 0) {
      return setErrors(["Please enter a keyword!"])
    }
    history.push(`/search/${keyword}`)
    setKeyword("")
    setErrors([])
  }

  return (
    <div className='searchBar-main'>
    <div>
      {errors?.map((error, i) => {
          return (
            <div key={i} className='search-errors'>{error}</div>
          )
        })}
    </div>
    <div className='navBar-searchBar-container'>
      <form onSubmit={handleSearch} className="searchBar-form">
        <input
          placeholder='Search for anything'
          className='searchBar-input'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          maxLength="140"
        />
        <button type='submit' className='searchBar-button'>
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  </div>
  )
}

export default SearchBar;
