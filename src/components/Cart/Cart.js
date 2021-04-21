import React from 'react';
import './Cart.scss';

function Cart({ item }) {

    return (
        <article className="cart__container">
            <div className="cart">
                <img src={item.image.default} alt={item.title} className="cart__image"/>
                <div className="cart__details">
                    <p className="cart__details--title">{item.title}</p>
                    <p className="cart__details--desc">{item.description}</p>
                    <p className="cart__details--qty">
                        <span>QTY: </span><input type="number" name="qty" id="qty" value={item.qty}/>
                    </p>
                    <p className="cart__details--price">R{item.price}</p>
                    <button className="cart__details--add">
                    Remove
                    </button>
                </div>
            </div>
        </article>
    )
}

export default Cart;
