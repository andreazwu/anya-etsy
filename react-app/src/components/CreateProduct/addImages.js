import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addImgs } from "../../store/products";
import './createProduct.css'

const AddImages = (productId) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [imgs, setImags] = useState([])
    const [url, setUrl] = useState()

    const imageSubmit = async(e) => {
        e.preventDefault()

        const payload = {imgs, productId}

        const response = await dispatch(addImgs(payload).catch(async(res) => {
            const error = await res.json()
            console.log('in AddImages-error:', error)
        }))
    }

    return (
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
    )
}

export default AddImages;
