import React, { useEffect } from 'react';
import './Item.scss';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Shopping/shopping-actions';

function Item({ currentItem, addToCart }){
    
    return ( 
        <article className="item">
            <img src={currentItem.image.default} alt="Sneaker" className="item__image"/>
            <div className="item__details">
                <p className="item__details--title">{currentItem.title}</p>
                <p className="item__details--desc">{currentItem.description}</p>
                <p className="item__details--price">R{currentItem.price}</p>
                <button className="item__details--add" onClick={()=> addToCart(currentItem.id)}>Add To Cart</button>
            </div>
        </article> 
    )
}

const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
