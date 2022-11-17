import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { getOneProduct } from "../../store/products";
import {addCartItemThunk, getCartItemsThunk} from "../../store/cartItems"
import LoadProductReviews from "../Reviews/LoadProductReviews";
import CreateReviewForm from "../Reviews/CreateReviewForm";
import Footer from '../Navigation/Footer.js';
import './productDetails.css'

const ProductDetails = () => {
    const history = useHistory()
    const { productId } = useParams();
    // console.log("in ProductDetails----productId", productId)
    const [showNewReviewModal, setShowNewReviewModal] = useState(false)
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const product = useSelector(state => state.products.singleProduct)[0]
    const [selectedImage, setSelectedImage] = useState(product?.productImages[0])
    const avgRating = product?.avgRating
    console.log("in ProductDetails----avgRating", avgRating)
    console.log("in ProductDetails----product", product)
    const reviewsObj = useSelector(state => state.reviews.product)
    const reviewsArr = Object.values(reviewsObj)
    const [quantity, setQuantity] = useState(1);
    console.log("in ProductDetails----product", product)
    let currentUser

    // console.log("in ProductDetails----product", product)

    useEffect(() => {
        dispatch(getOneProduct(productId))
    }, [dispatch, productId, reviewsArr.length])

    //verify if currentUser is seller of product
    let seller = false
    if (sessionUser?.id === product?.sellerId) seller = true

    // {console.log("product details, (before return), showNewReviewModal:", showNewReviewModal)}

    if (!product) return null;
    // if (!sellerId) return null;
// console.log("!!!!!!!!!!!!!!!!!!!!!!", sessionUser.id, product.sellerId)
    const addToCart = async () => {
       if(sessionUser){
           if (sessionUser.id == product.sellerId) {
                     await window.alert("You are the owner of this product! You cannot add it to cart")
                     history.push('/')
                  }
         await dispatch(addCartItemThunk(productId, {quantity}))
         history.push('/cart')
        } else{
            window.alert(`Please sign in to purchase.`)
          }
    }
    if (sessionUser && product) {
        if (sessionUser.id === product.seller_Id) {
          currentUser = false;
        } else currentUser = true;
      }
      const options = [];
      for (let i = 1; i <= product.stock; i++) {
          options.push(i);
      }

     const getCartButtonMessage = (stock) => {
        if (stock === 0) return 'Out of stock'


        let messageBase = 'Add to cart';

        if (stock <= 5) {
              messageBase += ` | Only ${stock} available`
        }

        return messageBase;
  }
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
        <>
        <div className="single-product-wrapper">
            <div className="product-left-part">

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

           <div className="single-product-reviews">
           <div className="single-product-numReviews">{product.numReviews} review(s)
                <span className="product-detail-avgrating-star">
                    {
                    Number(product.avgRating) % 1 ?
                    <span>
                        {[...Array(Math.floor(product.avgRating))].map((star) => (<i className="fa-solid fa-star"></i>))}
                        <i class="fa fa-star-half-o" aria-hidden="true"></i>
                    </span>
                    :
                    <span>
                        {[...Array(product.avgRating)].map((star) => (<i className="fa-solid fa-star"></i>))}
                    </span>
                    }
                </span>
                </div>

            {/* only show "create review" button to logged in user/ who has not left a review/ NON-seller */}
            <div>
                {
                sessionUser &&
                !seller &&
                !product.reviewers.includes(sessionUser.id) &&
                (<div>
                    <button
                        className="create-new-review-button"
                        onClick={()=>history.push(`/products/${productId}/new-review`)}
                    >
                        Create a new review
                        {/* <CreateReviewForm productId={productId}/> */}
                    </button>
                </div>)
                }
            {/* {console.log("product details, showNewReviewModal:", showNewReviewModal)} */}
            </div>
            <div className="one-spot-reviews-container">
                <LoadProductReviews productId={productId}/>
            </div>
            </div>
                </div>
                    <div className="product-right-part">
            <div className="single-product-seller">{product.seller}</div>
            <div className="single-product-sales">{product.salesNumber} sales  <span className="vertical-seperate">|</span>
            <span className="product-detail-avgrating-star">
            {
              Number(product.avgRating) % 1 ?
              <span>
                {[...Array(Math.floor(product.avgRating))].map((star) => (<i className="fa-solid fa-star"></i>))}
                <i class="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
              :
              <span>
                {[...Array(product.avgRating)].map((star) => (<i className="fa-solid fa-star"></i>))}
              </span>
            }
            </span>
            </div>
            <div className="single-product-name">{product.name}</div>

            <div className="single-product-price">${product.price}</div>

            <div className="single-product-stock">stock: {product.stock}</div>
            <div className="single-product-quantity">
                <select className="product-input-quantity" value={quantity} onChange={e => setQuantity(e.target.value)}>
                {options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                </select>
            </div>
            <div className="single-product-addtocart">

                {currentUser ?
                              <button id="add-to-cart-button" type='button' variant='outlined'
                              disabled={product.stock === 0}
                              onClick={addToCart}>
                              {getCartButtonMessage(product.stock)}
                              </button>
                : <button className="not-login-addtocart-button">Please log in to purchase</button>
                }
            </div>
            <div className="single-product-description">Description: {product.description}</div>
            </div>

      </div>
        <Footer />

        </>
    )
}


export default ProductDetails
