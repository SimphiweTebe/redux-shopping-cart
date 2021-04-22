import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addToCart, loadCurrentItem } from '../../redux/Shopping/shopping-actions';

function Product({ product, addToCart, loadCurrentItem }) {

    return (
    <div className="product">
        <img src={product.image.default} alt={product.title} className="product__image"/>

        <div className="product__details">
            <p className="product__details--title">{product.title}</p>
            <p className="product__details--desc">{product.description}</p>
            <p className="product__details--price">$ {product.price}</p>
        </div>

        <div className="product__buttons">
            
            <button className="product__buttons--view" onClick={() => loadCurrentItem(product)}>
            <Link to={`/product/${product.id}`}>View Item</Link>
            </button>
            
            <button 
            className="product__buttons--add"
            onClick={()=> addToCart(product.id)}
            >
            Add To Cart
            </button>
        </div>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(null, mapDispatchToProps)(Product);
