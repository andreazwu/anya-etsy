import { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneProduct } from "../../store/products";
import Footer from '../Navigation/Footer.js';
import './productDetails.css'

const ProductDetails = () => {
    const { productId } = useParams();
    console.log("in ProductDetails----productId", productId)
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const product = useSelector(state => state.products.singleProduct)[0]

    console.log("in ProductDetails----product", product)

    useEffect(() => {
        dispatch(getOneProduct(productId))
    }, [dispatch, productId])

    if (!product) return null;
    // if (!sellerId) return null;

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
        <Footer />
        </div>
    )
}


export default ProductDetails
