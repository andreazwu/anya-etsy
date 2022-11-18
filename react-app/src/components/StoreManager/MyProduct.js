import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { thunkRemoveProduct } from "../../store/products"
import EditProduct from "../EditProduct"
import noimage from "./noimage.jpg"
import "./StoreManager.css"
import { useState } from "react"
import { Modal } from "../../context/Modal"
import { FaStar } from "react-icons/fa"

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
  const [productId, setProductId] = useState()
  const [showEditForm, setShowEditForm] = useState(false)

  const editProductHandleClick = (id) => {
    setProductId(id)
    setShowEditForm(true)
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
        <div>
          <div className="myproducts-product-category">
            {product.category}
          </div>
          <div className="myproducts-product-name">
            {/* {product.name} */}
            {product.name.split(",")[0].split("|")[0]}
          </div>
          <div className="myproducts-product-rating">
            {/* {product.avgRating ?
              (<span>★ {product.avgRating.toFixed(1)}</span>):
              (<span>★ no review</span>)
            } */}
            {
              !Number(product.avgRating) &&
              <span>
              {[...Array(5)].map((star) => (<FaStar className="prod-star" color="#e4e5e9" size={18}/>))}
              </span>
            }
            {
              Number(product.avgRating) > 0 &&
              ( Number(product.avgRating) % 1 ?
              <span>
                {[...Array(Math.floor(product.avgRating))].map((star) => (<i className="fa-solid fa-star"></i>))}
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
              :
              <span>
                {[...Array(product.avgRating)].map((star) => (<i className="fa-solid fa-star"></i>))}
              </span> )
            }
          </div>
        </div>

        <div>
          <div className="myproducts-product-price">
            ${parseFloat(product.price).toFixed(2)}
          </div>
          <div className="myproducts-product-stock">
            {product.stock} left in stock
          </div>
        </div>

      </div>

      <div className="myproduct-buttons-container">
        {/* {seller && (
          <> */}
          {/* <Link to={`/edit-product/${product.id}`}>
            <button className="myproduct-buttons">
              Edit
            </button>
          </Link> */}
          <button className="myproduct-buttons" onClick={() => editProductHandleClick(product?.id)}> Edit </button>
          <div>
            {showEditForm && (
              <Modal onClose={() => setShowEditForm(false)}>
                <EditProduct productId={productId} setShowEditForm={setShowEditForm} />
              </Modal>
            )}
          </div>
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
