import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { getOneProduct } from "../../store/products";

import './productDetails.css'

const ProductDetails = () => {
    const { productId } = useParams();
    console.log("in ProductDetails----productId", productId)
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const product = useSelector(state => state.products.singleProduct)[0]
    const [selectedImage, setSelectedImage] = useState(product?.productImages[0])
    const avgRating = product?.avgRating
    console.log("in ProductDetails----avgRating", avgRating)
    console.log("in ProductDetails----product", product)

    useEffect(() => {
        dispatch(getOneProduct(productId))
    }, [dispatch, productId])

    if (!product) return null;


    const reviewStars = (avgRating) => {
        if (avgRating == 0) {
            return <span>"New"</span>
        } else if (Number.isInteger(avgRating)) {
            return <span> <i className="fa-solid fa-star"> *{avgRating}</i></span>
        } else {
            return <span>{Math.round(avgRating)} * <i className="fa-solid fa-star"></i> + <i class="fa fa-star-half-o" aria-hidden="true"></i></span>
        }
    }


    return (
        <div className="single-product-wrapper">
            <div className='product-image-main'>
                <div className='product-preview-image-outer'>
                    { product.productImages.length > 0 && product.productImages.map((image, i) => {
                    return (
                        <img src={image} className='product-preview-image' key={i} onClick={() => { setSelectedImage(image) }} alt='product'></img>
                    )
                    })}
                </div>
                <div className='product-main-image-outer'>
                    <img src={selectedImage ? selectedImage : product.productImages[0]} className='product-main-image' alt='product'></img>
                </div>
            </div>




            <div className="single-product-seller">{product.seller}</div>
            <div>{product.salesNumber} sales {reviewStars(product.avgRating)}
            </div>
            <div className="single-product-name">{product.name}</div>
            <div className="single-product-price">${product.price}</div>
            ------------------------------------------------------------
            <div className="single-product-stock">stock: {product.stock}</div>
            <div className="single-product-quantity">
                quantity: <input className="input-quantity" type="number" min="1" max={product.stock}/>
            </div>
            <div className="single-product-addtocart">
                <Link>
                    <button className="addtocart-button">Add to cart</button>
                </Link>
            </div>
            <div className="single-product-description">Description: {product.description}</div>
            -------------------------------------------------------------
            <div className="single-product-reviews">
                <div className="single-product-numReviews">{product.numReviews} reviews {product.avgRating} stars</div>
                {/* <div className="single-product-createReview">
                    {sessionUser && sellerId && sessionUser?.id !== sellerId
                    ?
                    <Link>
                        <button className="createReview-button">Review this Product</button>
                    </Link>
                    : null

                    }
                </div> */}
                    <Link>
                        <button className="createReview-button">Review this Product</button>
                    </Link>
            </div>

        </div>
    )
}


export default ProductDetails
