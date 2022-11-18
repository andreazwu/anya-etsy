import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, Link } from "react-router-dom"
import { thunkGetMyProducts, acResetProducts } from "../../store/products"
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
    // return () => {
    //   dispatch(acResetProducts())
    // }
  }, [dispatch]) //<<<<<

  if (!currentUser) return <Redirect to="/" />

  return (
    <div className="my-products-main">
      <div className="my-products-upper">
        <div className="my-products-header">Shop Manager</div>
        {currentUser?.username &&
          <div className="my-products-shop">
              <span className="shop-manager-shop-name">{currentUser?.username}</span>
              &nbsp;
              <i className="fa-solid fa-angle-right"></i>
          </div>
        }
      </div>

      <div className="my-products-outer">
        <div className="my-products-inner">
          {
            productsArr.map((product) => (
              <MyProduct key={product.id} product={product}/>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default StoreManager
