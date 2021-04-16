import React from 'react';
import './Cart.scss';
import Image from '../../images/cart_0005_item-6.jpg';

function Cart() {
    return (
        <article className="cart__container">
            <div className="cart">
                <img src={Image} alt="Sneaker" className="cart__image"/>
                <div className="cart__details">
                    <p className="cart__details--title">Nike 01</p>
                    <p className="cart__details--desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                    <p className="cart__details--price">$200</p>
                    <button className="cart__details--add">
                    Add To Cart
                    </button>
                </div>
            </div>
        </article>
    )
}

export default Cart
