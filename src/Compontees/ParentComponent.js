import React, { useState } from 'react';
import CardContainer from './CardContainer';
import Cart from './Cart';

const ParentComponent = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (title, price) => {
        const newItem = { title, price };
        setCartItems([...cartItems, newItem]);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <CardContainer addToCart={addToCart} />
                </div>
                <div className="col-md-4">
                    <div className="cart-container">
                        <Cart cartItems={cartItems} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentComponent;
