import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { thunkRemoveProduct } from "../../store/products"
import noimage from "./noimage.jpg"
import "./StoreManager.css"

const MyProduct = ({ product }) => {
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
    <div className="myproducts-product-container">


      <div className="myproducts-product-image-container">
        <Link style={{ textDecoration: "none", color: "black" }} to={`/products/${product.id}`}>
          {product.previewImage ?
            (<img src={product.previewImage} />) :
            (<img src={noimage} alt="noimage" />)
          }
        </Link>

      </div>

      <div className="myproducts-product-info">
          <div className="myproducts-product-category">
            {product.category}
          </div>
          <div className="myproducts-product-name">
            {product.name.split(",")[0].split("|")[0]}
          </div>
          <div className="myproducts-product-rating">
            {product.avgRating ?
              (<span>★ {product.avgRating.toFixed(1)}</span>):
              (<span>★ no review</span>)
            }
          </div>
          <div className="myproducts-product-price">
            ${parseFloat(product.price).toFixed(2)}
          </div>
          <div className="myproducts-product-stock">
            {product.stock} left in stock
          </div>
        </div>

      <div className="myproduct-buttons-container">
        {/* {seller && (
          <> */}
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
          {/* </>
        )} */}
      </div>
    </div>
  )
}

export default MyProduct
