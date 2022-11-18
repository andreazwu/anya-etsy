import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { checkoutCartThunk } from '../../store/cartItems';

export default function CartTotal({ cartItems, initialSubtotal }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const subtotal = Number(initialSubtotal).toFixed(2);
    const tax = Number((subtotal * 0.0827)).toFixed(2)
    const total = (Number(subtotal) + Number(tax)).toFixed(2)

    const deleteCart = async e => {
        e.preventDefault();
        if (window.confirm('Are you sure you want to checkout?')){
        await dispatch(checkoutCartThunk())}
        return history.push('/cart');
    };

    return (
        <div className="cart-checkout-card">
            <div className="checkout-card items-total">
                <span>Item(s) total: </span>
                <span>${subtotal}</span>
            </div>
            <div className="checkout-card sales-tax">
                <span>Sales Tax:</span>
                <span>${tax}</span>
            </div>
            <div className="checkout-card shipping-cost">
                <span>Shipping:</span>
                <span style={{
                    color: 'red'
                }}>FREE</span>
            </div>
            <div className="checkout-card items-total last-total">
                <span style={{
                    display: 'inline'
                }}>Total:</span>
                <span>${total}</span>
            </div>
            <div className="buy-item-button-container">
                <button className="cart-checkout-button" onClick={deleteCart}>Proceed with purchase</button>
            </div>
        </div>
    );
}
