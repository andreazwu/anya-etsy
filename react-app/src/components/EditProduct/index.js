import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editProduct, getAllProducts } from "../../store/products";
import "./editProduct.css"
import { thunkGetMyProducts } from "../../store/products";
const EditProduct = ({ productId, setShowEditForm}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const product = useSelector((state)=> state.products.allProducts[productId])
    const categories = ['Halloween', 'Valentine', 'Thanksgiving', 'Christmas', 'Easter', 'Spring Festival']
    const [name, setName] = useState(product?.name);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState(product?.description);
    const [price, setPrice] = useState(product?.price);
    const [stock, setStock] = useState(product?.stock);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(thunkGetMyProducts())
        const errors = []
        if (name?.length < 10 || name?.trim().length < 10) errors.push('Name: Name requires 10 characters minimum')
        if (name?.length > 250) errors.push('Name: Name exceeds 250 character limit')
        if (category?.length === 0) errors.push('Category: Category selection is required')
        if (description?.length < 10 || description?.trim().length < 10) errors.push('Description: Description requires 10 characters minimum')
        if (description.length > 2000) errors.push('Description: Description exceeds 2000 character limit')
        if (price && isNaN(price)) errors.push('Price: Price must be a number')
        if (price <= 0.1) errors.push('Price: Price must be greater than $0.10 ')
        if (price > 1000000) errors.push('Price: Price exceeds $1,000,000 limit')
        if (stock && (!Number.isInteger(+stock)|| stock < 1)) errors.push('Stock: Stock must be an integer more than 0')
        if (stock > 10000) errors.push('Stock: Stcok must be less than 10000')
        setErrors(errors)
    }, [dispatch, name, category, price, description, stock])

    const editSubmit = async(e) => {
        e.preventDefault()
        if (errors.length > 0) return

        const payload = {name, category, description, price, stock}

        const response = await dispatch(editProduct(payload, productId))
        if (response) setShowEditForm(false)
        // history.push(`/store-manager`)
    }

    return (
        <div className='editproduct-wrapper'>
            <div className='editproduct-form-title'>Edit Product</div>
            <form className='editproduct-form' onSubmit={editSubmit}>
                {/* <div className='eidtproduct-errors'>
                    <ul>
                        {errors && errors.map((err) => (
                            <li key={err}>{err}</li>
                        ))}
                    </ul>
                </div> */}
                <div className='editproduct-content'>
                        <label className='editproduct-label'>
                            <span className="editproduct-title">Name* </span>
                            <span className="editproduct-sub-title">Update the keywords used to search for your item.</span>
                            <br></br>
                            {errors?.map((error, i) => {
                                if (error.split(":")[0] === 'Name')
                                    return (
                                        <div key={i} className='edit-product-errors'>•{error.split(":")[1]}</div>
                                    )
                            })}
                            <input className='editproduct-input'
                                type="text"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <br></br>
                        <label className='editproduct-label'>
                            <span className="editproduct-title">Category* </span>
                            <span className="editproduct-sub-title">Change the category your product is listed under.</span>
                            <br></br>
                            {errors?.map((error, i) => {
                                if (error.split(":")[0] === 'Category')
                                    return (
                                        <div key={i} className='edit-product-errors'>•{error.split(":")[1]}</div>
                                    )
                            })}
                            <select
                                htmlFor='category'
                                name='category'
                                className='editproduct-input-select'
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
                        <label className='editproduct-label'>
                            <span className="editproduct-title">Price* </span>
                            <span className="editproduct-sub-title">Update the price of your product.</span>
                            <br></br>
                            {errors?.map((error, i) => {
                                if (error.split(":")[0] === 'Price')
                                    return (
                                        <div key={i} className='edit-product-errors'>•{error.split(":")[1]}</div>
                                    )
                            })}
                            <input className='editproduct-input'
                                type="text"
                                value={price}
                                required
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </label>
                        <br></br>
                        <label className='editproduct-label'>
                            <span className="editproduct-title">Stock* </span>
                            <span className="editproduct-sub-title">Update the stock of your product.</span>
                            <br></br>
                            {errors?.map((error, i) => {
                                if (error.split(":")[0] === 'Stock')
                                    return (
                                        <div key={i} className='edit-product-errors'>•{error.split(":")[1]}</div>
                                    )
                            })}
                            <input className='editproduct-input'
                                type="text"
                                value={stock}
                                required
                                onChange={(e) => setStock(e.target.value)}
                            />
                        </label>
                        <br></br>
                        <label className='editproduct-label'>
                            <span className="editproduct-title">Description* </span>
                            <span className="editproduct-sub-title">Modify the description of your product.</span>
                            <br></br>
                            {errors?.map((error, i) => {
                                if (error.split(":")[0] === 'Description')
                                    return (
                                        <div key={i} className='edit-product-errors'>•{error.split(":")[1]}</div>
                                    )
                            })}
                            <textarea className='editproduct-input-description'
                                type="text"
                                value={description}
                                required
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </label>
                        <br></br>
                    <button className="editproduct-button" type="submit">Edit</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct;
