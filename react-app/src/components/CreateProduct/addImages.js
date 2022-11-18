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
        const errors = []
        if (!url1 || !url1?.includes('https://')) errors.push("Please provide one image with 'https://'")

        if (url2 && !url2?.includes('https://')) {
            errors.push("Please provide a vaild image-2 with 'https://'")
        }
        if ((url3 && !url3?.includes('https://'))) {
            errors.push("Please provide a vaild image-3 with 'https://'")
        }
        setErrors(errors);

    }, [url1, url2, url3])

    const imageSubmit = async(e) => {
        e.preventDefault()
        if (errors.length > 0) {
            return
        }

        const imgProductId = productId.productId

        if (url1) {
            await dispatch(addImgs(url1, imgProductId))
        }

        if (url2) {
            await dispatch(addImgs(url2, imgProductId))
        }

        if (url3) {
            await dispatch(addImgs(url3, imgProductId))
        }

        history.push(`/store-manager`)
    }

    return (
        <div className='createproduct-wrapper'>
            <h1 className='createproduct-form-title'>Add Images</h1>
            <div className='createproduct-title'>Upload at least one image to show your item's most important qualities.</div>
            <div className='img-product-errors'>
                    <ul>
                        {errors && errors.map((err) => (
                            <li key={err}>{err}</li>
                        ))}
                    </ul>
            </div>
            <div className='addImage-content'>
                <form>
                    <label> Image 1 (required)
                        <br></br>
                        <input className='addImage-input'
                            type="text"
                            value={url1}
                            required
                            onChange={(e) => setUrl1(e.target.value)}
                        />
                    </label>
                    <br></br>
                    <label>Image 2 (optional)
                        <br></br>
                        <input className='addImage-input'
                            type="text"
                            value={url2}
                            onChange={(e) => setUrl2(e.target.value)}
                        />
                    </label>
                    <br></br>
                    <label>Image 3 (optional)
                        <br></br>
                        <input className='addImage-input'
                            type="text"
                            value={url3}
                            onChange={(e) => setUrl3(e.target.value)}
                        />
                    </label>
                </form>
                <button className="imgproduct-button" onClick={imageSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default AddImages;
