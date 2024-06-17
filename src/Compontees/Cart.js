import React from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { BiSolidPencil } from 'react-icons/bi'; 
import './styles.css';

const Cart = ({ cartItems }) => {
    const defaultValues = [
        { title: 'Extra Baba', price: 2 },
        { title: 'Extra Ice', price: 1 }
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2);
    const discount = (subtotal * 0.1).toFixed(2);
    const gratuity = 4.00;
    const total = (subtotal - discount + gratuity).toFixed(2);

    return (
        <div className="cart-container mt-5">
            <div className="cart p-4 shadow-lg position-relative">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                        <BsPersonFill className="me-2" size={24} />
                        <div>Kanika Bhatt</div>
                    </div>
                    <div>
                        <button className="btn btn-outline-primary d-flex align-items-center">
                            <BiSolidPencil className="me-1" /> 
                        </button>
                    </div>
                </div>
                {!cartItems || cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index}>
                                    <strong>{item.title}</strong> - <span>${parseFloat(item.price).toFixed(2)}</span>
                                    <ul>
                                        {defaultValues.map((extra, i) => (
                                            <li key={i}>
                                                <strong>{extra.title}</strong> - <span>${extra.price.toFixed(2)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <strong>Subtotal:</strong>
                            <strong>${subtotal}</strong>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Discount (10%):</span>
                            <span>-${discount}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Gratuity:</span>
                            <span>${gratuity.toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <strong>Total:</strong>
                            <strong>${total}</strong>
                        </div>
                        <button className="btn btn-voucher mt-3">Voucher</button>
                        <button className="btn btn-payment mt-2">Payment Receipt</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
