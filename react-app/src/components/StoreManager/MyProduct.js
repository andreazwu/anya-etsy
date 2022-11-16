import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { thunkRemoveProduct } from "../../store/products"
import noimage from "./noimage.jpg"

import "./StoreManager.css"

const MyProduct = ({product}) => {
  const dispatch = useDispatch()
  const history = useHistory()

  //verify if currentUser is seller of product
  const currentUser = useSelector((state) => state.session.user)
  let seller = false
  if (currentUser?.id === product.sellerId) seller = true

  //handle delete product click
  const deleteProductHandleClick = async () => {
    if (window.confirm("Are you sure you want to delete this Product?")) {
      await dispatch(thunkRemoveProduct(product.id))
    }
  }

  //handle edit product click
  const editProductHandleClick = async () => {
    // history.push(`/myproducts/edit/${product.id}`)
    // await dispatch(thunkEditProduct(Product.id))
  }

  return (
    <div>
      <Link style={{ textDecoration: "none", color: "black" }} to={`/products/${product.id}`}>

      <div className="allproducts-product-image-container">
        {product.previewImage ?
          (<div><img src={product.previewImage} /></div>) :
          (<div><img src={noimage} alt="noimage" /></div>)
        }
        </div>

        <div className="allproducts-product-info">

          <div className="allproducts-product-header">
            <div className="allproducts-product-name">
              {product.name.split(",")[0].split("|")[0]}
            </div>

            <div className="allproducts-product-rating">
              {product.avgRating ?
                (<span>★ {product.avgRating}</span>):
                (<span>★ no review</span>)
              }
            </div>
          </div>

          <div className="allproducts-product-price">
            ${parseInt(product.price).toFixed(2)}
          </div>
          <div className="allproducts-product-stock">
            {product.stock} left in stock
          </div>
        </div>
      </Link>

        <div className="myproduct-buttons-container">
          {seller && (
            <>
              <button
              className="myproduct-buttons"
              onClick={editProductHandleClick}>
                Edit
              </button>
              <button
              className="myproduct-buttons"
              onClick={deleteProductHandleClick}>
                Delete
              </button>
            </>
          )}
        </div>
    </div>
  )
}

export default MyProduct
