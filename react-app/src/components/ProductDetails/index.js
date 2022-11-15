import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneProduct } from "../../store/products";
import LoadProductReviews from "../Reviews/LoadProductReviews";
import CreateReviewModal from "../Reviews/CreateReviewModal"
import './productDetails.css'

const ProductDetails = () => {
    const { productId } = useParams();
    console.log("in ProductDetails----productId", productId)
    const [showNewReviewModal, setShowNewReviewModal] = useState(false)
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const product = useSelector(state => state.products.singleProduct)[0]
    const reviewsObj = useSelector(state => state.reviews.product)
    const reviewsArr = Object.values(reviewsObj)

    console.log("in ProductDetails----product", product)

    useEffect(() => {
        dispatch(getOneProduct(productId))
    }, [dispatch, productId, reviewsArr.length])

    //verify if currentUser is seller of product
    let seller = false
    if (sessionUser?.id === product?.sellerId) seller = true

    {console.log("product details, (before return), showNewReviewModal:", showNewReviewModal)}

    if (!product) return null;
    // if (!sellerId) return null;

    return (
        <div className="single-product-wrapper">
            <div className="single-product-img">
                <img src={product.productImages[0]}></img></div>
            <div className="single-product-seller">{product.seller}</div>
            <div>{product.salesNumber} sales  {product.avgRating.toFixed(2)} stars</div>
            <div className="single-product-name">{product.name}</div>
            <div className="single-product-price">${product.price}</div>
            ------------------------------------------------------------
            <div className="single-product-stock">stock: {product.stock}</div>
            <div className="single-product-quantity">
                <input className="input-quantity" type="number" min="1" max={product.stock}/>
            </div>
            <div className="single-product-addtocart">
                <Link>
                    <button className="addtocart-button">Add to cart</button>
                </Link>
            </div>
            <div className="single-product-description">Description: {product.description}</div>
            -------------------------------------------------------------
            <div className="single-product-reviews">
                <div className="single-product-numReviews">{product.numReviews} reviews {product.avgRating.toFixed(2)} stars</div>
            </div>
            {/* only show "create review" button to NON-seller of product */}
            <div>
                {
                sessionUser &&
                !seller &&
                <CreateReviewModal
                    productId={productId}
                    showNewReviewModal={showNewReviewModal}
                    setShowNewReviewModal={setShowNewReviewModal}
                />
                }
            {console.log("product details, showNewReviewModal:", showNewReviewModal)}
            </div>
            <div className="one-spot-reviews-container">
                <LoadProductReviews productId={productId}/>
            </div>

        </div>
    )
}


export default ProductDetails
