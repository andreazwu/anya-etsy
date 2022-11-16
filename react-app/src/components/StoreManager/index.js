import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { thunkGetMyProducts } from "../../store/products"
import MyProduct from "./MyProduct"
import "./StoreManager.css"

const StoreManager = () => {
  //load user products
  const dispatch = useDispatch()
  const currentUser = useSelector(state=>state.session.user)
  const productsObj = useSelector(state=>state.products.allProducts)
  const productsArr = Object.values(productsObj)

  useEffect(()=>{
    dispatch(thunkGetMyProducts())
  }, [dispatch, currentUser, productsObj])

  if (!currentUser) return <Redirect to="/" />

  return (
    <>
      <div className="myproducts-header">
        {
          productsArr.length === 0 ?
          (<>
            <h1>My Products</h1>
            <h4>You Haven't Listed Any Products!</h4>
          </>):
          <h1>My Products</h1>
        }
      </div>

      <div className="wrapper-center">
        <div className="allproducts-container myproducts">
          {
            productsArr.map((product) => (
              //implement product in separate component add prop
              <MyProduct key={product.id} product={product}>
                {/* {console.log("LOAD USER PRODUCTS (STOREMANAGER) COMPONENT RETURN:", product)} */}
              </MyProduct>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default StoreManager
