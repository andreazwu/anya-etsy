import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { checkoutCartThunk } from '../../store/cartItems';

export default function CartTotal({ cartItems, initialSubtotal }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const subtotal = parseInt(initialSubtotal);
    const tax = parseInt((subtotal * 0.0827).toFixed(2))
    const total = parseInt(subtotal) + parseInt(tax);

    const deleteCart = async e => {
        e.preventDefault();
        await dispatch(checkoutCartThunk());
        history.push('/');
    };

    return (
        <div className="">
            <div className="">
                <span>Item(s) total: </span>
                <span>${subtotal}</span>
            </div>
            <div className="">
                <span>Sales Tax:</span>
                <span>${tax}</span>
            </div>
            <div className="">
                <span>Shipping:</span>
                <span style={{
                    color: 'red'
                }}>FREE</span>
            </div>
            <div className="">
                <span style={{
                    display: 'inline'
                }}>Total [{cartItems.length} item(s) ]:</span>
                <span>${total}</span>
            </div>
            <div className="">
                <button className="" onClick={deleteCart}>Proceed with purchase</button>
            </div>
        </div>
    );
}
