import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { editCartItemThunk, getCartItemsThunk, deleteCartItemThunk } from "../../store/cartItems";
import './cart.css';

export default function CartItem({ item }) {
    const dispatch = useDispatch();
    const history = useHistory()
    const [quantity, setQuantity] = useState(item?.quantity);
console.log("%%%%%%%%%%%%%%%%%%%%item", item)

    const [revenue, setRevenue] = useState(parseInt(item?.quantity * item?.Product?.price))
console.log("QQQQQQQQQQQQQQQQuantity", quantity)
    const options = [];
    for (let i = 1; i <= 100; i++) {
        options.push(i);
    }

    useEffect(() => {
        dispatch(editCartItemThunk(item.id, quantity)).then(async () => {
            const allItems = await dispatch(getCartItemsThunk());
            console.log("^^^^^^^^^^^^^^^^^^allItems", allItems)
            const cartDetails = allItems.CartItems
            console.log("*******************cartDetails", cartDetails)
            const editedItem = cartDetails.find(editItem => editItem.id === item.id);
            console.log("(((((((((((((((((((editedItem", editedItem)
            setRevenue(parseInt(editedItem?.quantity) * parseInt(editedItem?.Product.price))
        });
    }, [quantity]);

    // const handleChange = (e) => {
    //     dispatch(editCartItemThunk(Number(item.id), Number(quantity)))
    //     setQuantity(e.target.value)
    // }

    const deleteCartItem = async () => {
        await dispatch(deleteCartItemThunk(item.id));
        await dispatch(getCartItemsThunk());
    }

    return (
        <div className="cart-item-container-div">
            <div className="cart-image-container" onClick={() => history.push(`/products/${item.id}`)}>
                <span className="cart-item-name">{item.Product.name}</span>
                <img src={item.Product.previewImage} alt='product' />
            </div>
            <div className="cart-product-name-remove">
                <div>{item.Product.description}</div>
                <button className='cart-item-remove-item-button' onClick={() => deleteCartItem()}>Remove</button>
            </div>
                <div className="cart-item-quantity-select">
                    <select className="cart-quantity-options" value={quantity} onChange={e => setQuantity(e.target.value)}>
                        {options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            <div className="quantity-price-box">
                <div className="item-total-container">
                    <p>$ {revenue}</p>
                    x{quantity}
                    <p>(${item.Product.price} each)</p>
                </div>
            </div>
        </div>
    );
}
