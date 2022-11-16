import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneProduct } from "../../store/products";
import {addCartItemThunk, getCartItemsThunk} from "../../store/cartItems"
import './productDetails.css'

const ProductDetails = () => {
    const { productId } = useParams();
    console.log("in ProductDetails----productId", productId)
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const product = useSelector(state => state.products.singleProduct)[0]
    const [quantity, setQuantity] = useState(1);
    console.log("in ProductDetails----product", product)
    const history = useHistory();
    let currentUser

    useEffect(() => {
        dispatch(getOneProduct(productId))
    }, [dispatch, productId])

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

    return (
        <div className="single-product-wrapper">
            <div className="single-product-img">
                <img src={product.productImages[0]}></img></div>
            <div className="single-product-seller">{product.seller}</div>
            <div>{product.salesNumber} sales  {product.avgRating} stars</div>
            <div className="single-product-name">{product.name}</div>
            <div className="single-product-price">${product.price}</div>
            ------------------------------------------------------------
            <div className="single-product-stock">stock: {product.stock}</div>
            <div className="single-product-quantity">
                <select className="input-quantity" value={quantity} onChange={e => setQuantity(e.target.value)}>
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
