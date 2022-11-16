import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addImgs } from "../../store/products";
import './createProduct.css'

const AddImages = (productId) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [imgs, setImgs] = useState([])
    const [errors, setErrors] = useState([]);
    const [url1, setUrl1] = useState()
    const [url2, setUrl2] = useState()
    const [url3, setUrl3] = useState()

    useEffect(() => {
        if (url3) setImgs([url1, url2, url3])
        else if (url2) setImgs([url1, url2])
        else if (url1) setImgs([url1])
        else setImgs([])
        console.log('in CreateProduct-imgs:', imgs)
        // if ((url1 && !url1.startWith('https://')) || (url2 && !url2.startWith('https://')) || (url3 && !url3.startWith('https://'))) {
        //     errors.push("Please provide a vaild url with 'https://'")
        // }
        if ((url1 && !url1.startWith('https://'))) {
            errors.push("Please provide a vaild url with 'https://'")
        }
        setErrors(errors);

    }, [url1, url2, url3])

    const imageSubmit = async(e) => {
        e.preventDefault()
        const payload = {imgs, productId}
        console.log('in CreateProduct-payload:', payload)

        const response = await dispatch(addImgs(imgs, productId)).catch(async(res) => {
            const error = await res.json()
            console.log('in AddImages-error:', error)
        })
    }

    return (
        <div className='addImage-wrapper'>
            <h1>Add Images</h1>
            <div className='addImage-title'>Upload at least one image to show your item's most important qualities. *Only URLs accepted.</div>
            <div className='createproduct-errors'>
                    <ul>
                        {errors && errors.map((err) => (
                            <li key={err}>{err}</li>
                        ))}
                    </ul>
            </div>
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
    )
}

export default AddImages;
