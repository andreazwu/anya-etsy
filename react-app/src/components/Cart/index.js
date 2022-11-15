import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink,Redirect } from "react-router-dom"
import { getCartItemsThunk } from "../../store/cartItems";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import './cart.css';

const Cart = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [cartLoaded, setCartLoaded] = useState(false);
    const sessionUser = useSelector(state => state.session.user)
    const cartItems = useSelector(state => Object.values(state.cart));
    // const items = Object.values(cartItems)
     console.log("###########", sessionUser)
     console.log("!!!!!!!!!!!!!!!!!!!!!!",cartItems,"!!!!!!!!!!!!!!!!!!!")
    //  console.log("!!!!!!!!!!!!!!!!!!!!!!",items,"!!!!!!!!!!!!!!!!!!!")
    const dispatch = useDispatch();
    let initialSubtotal = 0;
    if (cartItems) {
      for (let cartItem of cartItems) {
        initialSubtotal += (cartItem.quantity * cartItem.Product.price);
      };
    }

    useEffect(() => {
        if (sessionUser) {
          dispatch(getCartItemsThunk()).then(() => setCartLoaded(true))
        }
      }, [cartItems?.length])

    if (!sessionUser) {
      setShowLogin(true)
      return <Redirect to='/' />
    }

    return cartLoaded && (
        <div className="">
          {cartItems?.length > 0 && <div className="">
            {cartItems?.length > 0 && <h2 className="">{cartItems.length} items in your cart</h2>}
            {cartItems?.length > 0 && cartItems?.map((item, i) =>
              <CartItem key={i} item={item} />
            )}
          </div>}
          {cartItems?.length > 0 &&
            <CartTotal
              cartItems={cartItems}
              initialSubtotal={initialSubtotal}
            />
          }
          {!cartItems?.length &&
            <div className="cart-empty-message">
              <h1>Your cart is empty.</h1>
              <NavLink style={{
                color: 'black'
              }} to='/'>Discover something unique to fill it up</NavLink>
            </div>
          }
        </div>
      )












}
export default Cart;
