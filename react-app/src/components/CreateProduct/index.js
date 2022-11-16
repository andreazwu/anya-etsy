import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createProduct, getAllProducts } from "../../store/products";
import AddImages from "./addImages";
import './createProduct.css'

const CreatePreoduct = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const categories = ['Halloween', 'Valentine', 'Thanksgiving', 'Christmas', 'Easter', 'Spring Festival']
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [productId, setProductId] = useState()
    const [page, setPage] = useState(0)
    const [errors, setErrors] = useState([]);
    const [checkDuplicate, setCheckDuplicate] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        dispatch(getAllProducts())

        const errors = []
        if (name.length < 10 || name.trim().length < 10) errors.push('Name: Name requires 10 characters minimum')
        if (name.length > 250) errors.push('Name: Name exceeds 250 character limit')
        if (category.length === 0) errors.push('Category: Category selection is required')
        if (description.length < 10 || description.trim().length < 10) errors.push('Description: Description requires 10 characters minimum')
        if (description.length > 2000) errors.push('Description: Description exceeds 2000 character limit')
        if (isNaN(price)) errors.push('Price: Price must be a number')
        if (price < 0.1) errors.push('Price: Minimum price of $0.10 required')
        if (price > 1000000) errors.push('Price: Price exceeds $1,000,000 limit')
        if (!Number.isInteger(+stock)|| stock < 1) errors.push('Stock: Stock must be an integer more than 0')
        if (stock > 10000) errors.push('Stock: Stcok must be less than 10000')
        setErrors(errors)
      }, [name, category, price, description, stock])

    const createSubmit = async(e) => {
        e.preventDefault()
        if (errors.length > 0) {
            return
        }
        const payload = {name, category, description, price, stock}

        const response = await dispatch(createProduct(payload))
        if (response) {
            setProductId(response.id)
            setPage(1)
        }
    }

    return (
        <div className='createproduct-total'>
        {page === 0 &&
            <>
            <div className='createproduct-wrapper'>
                <h1>Create Product</h1>
                <form className='createproduct-form' onSubmit={createSubmit}>
                    <div className='createproduct-errors'>
                        <ul>
                            {errors && errors.map((err) => (
                                <li key={err}>{err}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='createproduct-content'>
                        <label className='createproduct-label'>
                            <span className="createproduct-title">name* </span>
                            <span className="createproduct-sub-title">Include keywords that buyers would use to search for your item.</span>
                            <br></br>
                                <input className='createproduct-input'
                                    type="text"
                                    value={name}
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                        </label>
                        <br></br>
                        <label className='createproduct-label'>
                            <span className="createproduct-title">category* </span>
                            <span className="createproduct-sub-title">Select a category to help shoppers search your product.</span>
                            <br></br>
                            <select
                                htmlFor='category'
                                name='category'
                                className='createproduct-input'
                                required
                                onChange={(e) => setCategory(e.target.value)}
                            >
                            <option disabled selected value={category}>-- Select a Category --</option>
                                {categories.map((category) => {
                                    return (
                                        <option
                                            value={category}
                                        >{category}</option>)
                                })}
                    </select>
                        </label>
                        <br></br>
                        <label className='createproduct-label'>
                            <span className="createproduct-title">description* </span>
                            <span className="createproduct-sub-title">Start with a brief overview that describes your item's finest features.</span>
                            <br></br>
                                <input className='createproduct-input'
                                    type="text"
                                    value={description}
                                    required
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                        </label>
                        <br></br>
                        <label className='createproduct-label'>
                            <span className="createproduct-title">price* </span>
                            <span className="createproduct-sub-title">Remember to factor in the cost of materials, labor, and other business expenses.</span>
                            <br></br>
                                <input className='createproduct-input'
                                    type="text"
                                    value={price}
                                    required
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                        </label>
                        <br></br>
                        <label className='createproduct-label'>
                            <span className="createproduct-title">stock* </span>
                            <span className="createproduct-sub-title">Provide the stock of your product.</span>
                            <br></br>
                                <input className='createproduct-input'
                                    type="text"
                                    value={stock}
                                    required
                                    onChange={(e) => setStock(e.target.value)}
                                />
                        </label>
                        <br></br>
                        <button className="createproduct-button" type="submit">create and next</button>

                    </div>
                </form>
            </div>
            </>
            }
            {page === 1 &&
                <div className='main-shop-outer'>
                <AddImages productId={productId} />
                </div>
            }
        </div>
    )
}

export default CreatePreoduct;
