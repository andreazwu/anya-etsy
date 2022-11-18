import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { editCartItemThunk, getCartItemsThunk, deleteCartItemThunk } from "../../store/cartItems";
import './cart.css';

export default function CartItem({ item }) {
    const dispatch = useDispatch();
    const history = useHistory()
    const [quantity, setQuantity] = useState(Number(item?.quantity));
    let [revenue, setRevenue] = useState(Number(item?.quantity * item?.Product?.price))
    const stock = item.Product.stock

    const options = [];
    for (let i = 1; i <= stock; i++) {
        options.push(i);
    }

    useEffect(() => {
        dispatch(editCartItemThunk(item.id, quantity)).then(async () => {
            const allItems = await dispatch(getCartItemsThunk());
            const cartDetails = allItems.CartItems
            const editedItem = cartDetails.find(editItem => editItem.id === item.id);
            if(editedItem.quantity > stock) editedItem.quantity = stock
            setRevenue(Number(editedItem?.quantity) * Number(editedItem?.Product.price));
        });
    }, [quantity]);

    // const handleChange = (e) => {
    //     dispatch(editCartItemThunk(Number(item.id), Number(quantity)))
    //     setQuantity(e.target.value)
    // }

    const deleteCartItem = async () => {
        if (window.confirm('Are you sure you want to delete this item?')){
        await dispatch(deleteCartItemThunk(item.id))}
        await dispatch(getCartItemsThunk());
    }

    return (
        <>
        <div className="cart-item-container-div">
            <div className="cart-image-container" onClick={() => history.push(`/products/${item.Product.id}`)}>
                <img src={item?.Product?.previewImage} alt='product' />
            </div>
            <div>
             <div className="cart-item-name" onClick={() => history.push(`/products/${item.Product.id}`)}>{item?.Product?.name}</div>
              <div className="other-people-message">
                 {/* {console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@message", item.message)}
                 {console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@", item)}
                 {item.message &&
                    <div>{item?.message}</div>} */}
                 {item?.quantity == stock && <div>You have reached the maximum stock for this product.</div>}
                 {/* {Math.floor(Math.random() * 20 + 2)} people have this in their cart */}
              </div>
              <button className='cart-item-remove-item-button' onClick={() => deleteCartItem()}> Remove</button>
            </div>
            <div className="cart-product-name-remove">

                <div className="cart-item-quantity-select">
                    <select className="cart-quantity-options" value={quantity} onChange={e => setQuantity(e.target.value)}>
                        {options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                 </div>
            <div className="quantity-price-box">
                <div className="item-total-container">
                    <p>$ {revenue.toFixed(2)}</p>
                    x{quantity}
                    <p>(${item?.Product?.price.toFixed(2)} each)</p>
                </div>
            </div>
        </div>
        </>
    );
}
