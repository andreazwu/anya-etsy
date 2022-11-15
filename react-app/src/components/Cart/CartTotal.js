import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { checkoutCartThunk } from '../../store/cartItems';

export default function CartTotal({ cartItems, initialSubtotal }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const subtotal = Number(initialSubtotal);
    const tax = Number((subtotal * 0.0827)).toFixed(2)
    const total = Number(subtotal) + Number(tax);

    const deleteCart = async e => {
        e.preventDefault();
        await dispatch(checkoutCartThunk());
        history.push('/');
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
            <div className="checkout-card items-total">
                <span style={{
                    display: 'inline'
                }}>Total [{cartItems.length} item(s) ]:</span>
                <span>${total}</span>
            </div>
            <div className="cart-checkout-button">
                <button className="" onClick={deleteCart}>Proceed with purchase</button>
            </div>
        </div>
    );
}
