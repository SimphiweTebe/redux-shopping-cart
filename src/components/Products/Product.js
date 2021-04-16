import React from 'react';
import { Link } from "react-router-dom";


function Product({product}) {

    return (
    <div className="product">
        <img src={product.image.default} alt={product.title} className="product__image"/>

        <div className="product__details">
            <p className="product__details--title">{product.title}</p>
            <p className="product__details--desc">{product.description}</p>
            <p className="product__details--price">$ {product.price}</p>
        </div>

        <div className="product__buttons">
            
            <button className="product__buttons--view">
            <Link to={`/product/${product.id}`}>View Item</Link>
            </button>
            
            <button className="product__buttons--add">
            Add To Cart
            </button>
        </div>
    </div>
    )
}

export default Product
