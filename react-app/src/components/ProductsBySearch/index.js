import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getProductsBySearch } from '../../store/products';
import './search.css'
import Footer from '../Navigation/Footer.js';

const ProductsBySearch = () =>{
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const currUser = useSelector(state => state.session.user)
  const productsArr = useSelector(state => Object.values(state.products.searchedProducts))

  useEffect(() => {
    dispatch(getProductsBySearch(keyword))
  }, [dispatch, keyword])


  return (
    <div className='search-product-container'>
      <div className='search-header-container'>
        <div className='search-header'>
          {productsArr?.length > 0 ?
            <><div className='search-sum'> {productsArr?.length} search result for "{keyword}</div><span className='search-sum'>"</span></>
            :
            <><div className='search-sum'> We couldn't find any item for "{keyword}</div><span className='search-sum'>" &nbsp;</span><div className='search-again-message'>Try searching for something else instead?</div></>
          }
        </div>
      </div>
      <div className='search-main'>
        <div className='search-products-main'>
          {productsArr?.map((product, i) => {
            return (
              <NavLink to={`/products/${product?.id}`} style={{textDecoration: 'none'}} key={i}>
                <div className='search-product-body'>
                  <div className='search-product-img-container'>
                    <img src={product?.previewImage} className='search-product-img' alt='images'></img>
                  </div>
                  <div className='search-product-name'>{product.name}</div>
                  {product?.numReviews > 0 && <>
                    <div className='search-product-stars'>
                      <span className='search-product-num-reviews'>
                      {[...Array(Math.floor(product.avgRating))].map(star => <i class="fa-sharp fa-solid fa-star"></i>)}
                      ({product.numReviews})
                      </span>
                    </div>
                  </>
                  }
                  <div className='search-product-price'>${parseFloat(product?.price).toFixed(2)}</div>
                  <div className='search-product-shop'>{currUser?.username}</div>
                </div>
              </NavLink>
            )
          })}
        </div>
      </div>
    <Footer />
    </div>
  )
}

export default ProductsBySearch;
