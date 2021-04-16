import React from 'react';
import './Item.scss';
import Image from '../../images/cart_0005_item-6.jpg';

function Item() {
    return (
        <article className="item">
            <img src={Image} alt="Sneaker" className="item__image"/>

            <div className="item__details">
                <p className="item__details--title">Nike 01</p>
                <p className="item__details--desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                <p className="item__details--price">$200</p>
                <button className="item__details--add">
                Add To Cart
                </button>
            </div>
        </article>
    )
}

export default Item
