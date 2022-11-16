import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../../store/products";
import { addImgs } from "../../store/products";
import AddImages from "./addImages";
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
    const [imgs, setImgs] = useState([])
    const [url1, setUrl1] = useState()
    const [url2, setUrl2] = useState()
    const [url3, setUrl3] = useState()
    let productId

    const createSubmit = async(e) => {
        e.preventDefault()

        const payload = {name, category, description, price, stock}

        await dispatch(createProduct(payload)).catch(async(res) => {
            const error = await res.json()
            console.log('in CreateProduct-error:', error)
        })
        // console.log('in CreateProduct-response:', response)
        // productId = response.id
        // if (response) {
        //     setPage(1)
        // }
        console.log('in CreateProduct-productId:', productId)
    }

    useEffect(() => {
        if (url3) setImgs([url1, url2, url3])
        else if (url2) setImgs([url1, url2])
        else if (url1) setImgs([url1])
        else setImgs([])
        console.log('in CreateProduct-imgs:', imgs)
    }, [url1, url2, url3])

    const imageSubmit = async(e) => {
        e.preventDefault()
        const productId = parseInt(57)
        const payload = {imgs, productId}
        console.log('in CreateProduct-payload:', payload)

        const response = await dispatch(addImgs(imgs, productId)).catch(async(res) => {
            const error = await res.json()
            console.log('in AddImages-error:', error)
        })
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
            <div className='addImage-title'>Upload at least one image to show your item's most important qualities. *Only URLs accepted.</div>
            <div className='addImage-content'>
                <form>
                    <label> Image 1:
                        <input className='addImage-input'
                            type="text"
                            value={url1}
                            required
                            onChange={(e) => setUrl1(e.target.value)}
                        />
                    </label>
                    <br></br>
                    <label>Image 2:
                        <input className='addImage-input'
                            type="text"
                            value={url2}
                            onChange={(e) => setUrl2(e.target.value)}
                        />
                    </label>
                    <br></br>
                    <label>Image 3:
                        <input className='addImage-input'
                            type="text"
                            value={url3}
                            onChange={(e) => setUrl3(e.target.value)}
                        />
                    </label>
                </form>
                <button className="createproduct-button" onClick={imageSubmit}>Submit</button>
            </div>
        </div>
        </>
    )
}

export default CreatePreoduct;
