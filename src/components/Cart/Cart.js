import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

import { useHistory } from "react-router-dom";

const Cart = ({ items, total,subtotal, currency, removeFromCart,totalImp }) => {

    const history = useHistory();

    const handleCheckout = () => {
        history.push("/resume");
    }

    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total">SubTotal: {subtotal} {currency}</div>
                        <div className="cart__total">Impuestos : {totalImp} {currency}</div>
                        <div className="cart__total">Total: {total} {currency}</div>
                        <button className="checkout_Button btn btn-primary"  onClick = {handleCheckout} disabled={items.length === 0 ? "disabled" : ""}> CheckOut </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
