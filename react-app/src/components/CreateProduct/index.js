import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../../store/products";
import { addImgs } from "../../store/products";
import './createProduct.css'

const CreatePreoduct = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    // const sessionUser = useState(state => state.session.user);
    const categories = ['Halloween', 'Valentine', 'Thanksgiving', 'Christmas', 'Easter', 'Spring Festival']
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [errors, setErrors] = useState([]);
    const [page, setPage] = useState(0)
    const [imgs, setImags] = useState([])
    const [url, setUrl] = useState()

    const createSubmit = async(e) => {
        e.preventDefault()

        const payload = {name, category, description, price, stock}

        const response = await dispatch(createProduct(payload).catch(async(res) => {
            const error = await res.json()
            console.log('in CreateProduct-error:', error)
        }))
        if (response) {
            setPage(1)
        }
    }


    const imageSubmit = async(e) => {
        e.preventDefault()

        const payload = {imgs}

        const response = await dispatch(addImgs(imgs).catch(async(res) => {
            const error = await res.json()
            console.log('in CreateProduct-error:', error)
        }))
    }

    return (
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
                        <span className="createproduct-sub-title">Select a category to help shoppers fi your product.</span>
                        <br></br>
                        <select
                            htmlFor='category'
                            name='category'
                            className='createproduct-input'
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

        <div className='addImage-wrapper'>
            <h1>Add Images</h1>
            <div className='addImage-title'>Upload up to four images to show your item's most important qualities. *Only URLs accepted.</div>
            <div className='addImage-content'>
                <form>
                    <label> Image 1:
                        <input className='addImage-input'
                            type="text"
                            value={url}
                            required
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </label>
                    <br></br>
                    <label>Image 2:
                        <input className='addImage-input'
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </label>
                    <br></br>
                    <label>Image 3:
                        <input className='addImage-input'
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </label>
                    <br></br>
                    <label>Image 4:
                        <input className='addImage-input'
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </label>
                </form>
                <button className="createproduct-button" type="submit">Submit</button>
            </div>
        </div>
        </>
    )
}

export default CreatePreoduct;
