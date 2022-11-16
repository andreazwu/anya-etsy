import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editProduct, getAllProducts } from "../../store/products";

const EditProduct = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { productId } = useParams()
    const product = useSelector((state)=> state.products.allProducts[productId])
    const categories = ['Halloween', 'Valentine', 'Thanksgiving', 'Christmas', 'Easter', 'Spring Festival']
    const [name, setName] = useState(product?.name);
    const [category, setCategory] = useState(product?.category);
    const [description, setDescription] = useState(product?.description);
    const [price, setPrice] = useState(product?.price);
    const [stock, setStock] = useState(product?.stock);
    const [errors, setErrors] = useState([]);
    console.log(product)

    useEffect(() => {
        dispatch(getAllProducts)
    }, [dispatch])

    const editSubmit = async(e) => {
        e.preventDefault()

        const payload = {name, category, description, price, stock}

        const response = await dispatch(editProduct(payload, productId)).catch(async(res) => {
            const error = await res.json()
            console.log('in editProduct-error:', error)
        })
    }

    return (
        <div className='editproduct-wrapper'>
            <h1>Eidt Product</h1>
            <form className='editproduct-form' onSubmit={editSubmit}>
                <div className='eidtproduct-errors'>
                    <ul>
                        {errors && errors.map((err) => (
                            <li key={err}>{err}</li>
                        ))}
                    </ul>
                </div>
                <div className='editproduct-content'>
                    <label className='editproduct-label'>
                        <span className="editproduct-title">name* </span>
                        <span className="editproduct-sub-title">Include keywords that buyers would use to search for your item.</span>
                        <br></br>
                            <input className='editproduct-input'
                                type="text"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                    </label>
                    <br></br>
                    <label className='editeproduct-label'>
                        <span className="editproduct-title">category* </span>
                        <span className="editproduct-sub-title">Select a category to help shoppers fi your product.</span>
                        <br></br>
                        <select
                            htmlFor='category'
                            name='category'
                            className='editproduct-input'
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
                        <span className="editproduct-title">description* </span>
                        <span className="editproduct-sub-title">Start with a brief overview that describes your item's finest features.</span>
                        <br></br>
                            <input className='editproduct-input'
                                type="text"
                                value={description}
                                required
                                onChange={(e) => setDescription(e.target.value)}
                            />
                    </label>
                    <br></br>
                    <label className='editproduct-label'>
                        <span className="editproduct-title">price* </span>
                        <span className="editproduct-sub-title">Remember to factor in the cost of materials, labor, and other business expenses.</span>
                        <br></br>
                            <input className='editproduct-input'
                                type="text"
                                value={price}
                                required
                                onChange={(e) => setPrice(e.target.value)}
                            />
                    </label>
                    <br></br>
                    <label className='editproduct-label'>
                        <span className="editproduct-title">stock* </span>
                        <span className="editproduct-sub-title">Provide the stock of your product.</span>
                        <br></br>
                            <input className='editproduct-input'
                                type="text"
                                value={stock}
                                required
                                onChange={(e) => setStock(e.target.value)}
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
