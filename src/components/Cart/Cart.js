import React, {useState} from 'react';
import './Cart.scss';
import { connect } from 'react-redux';
import { adjustQty, removeFromCart } from '../../redux/Shopping/shopping-actions';

function Cart({ item, removeFromCart, adjustQty }) {

    const [input, setInput] = useState(item.qty);

    const handleChange = (e) =>{
        setInput(e.target.value);
        adjustQty(item.id, e.target.value)
    }

    // REMOVE IF QTY LESS THAN ZERO
    if(item.qty < 1) {
        removeFromCart(item.id);
    }

    return (
        <article className="cart__container">
            <div className="cart">
                <img src={item.image.default} alt={item.title} className="cart__image"/>
                <div className="cart__details">
                    <p className="cart__details--title">{item.title}</p>
                    <p className="cart__details--desc">{item.description}</p>
                    <p className="cart__details--qty">
                        <span>QTY: </span>
                        <input 
                            type="number" 
                            name="qty" 
                            id="qty" 
                            value={input}
                            onChange={handleChange}
                        />
                    </p>
                    <p className="cart__details--price">R{item.price}</p>
                    <button className="cart__details--add" onClick={() => removeFromCart(item.id)}>
                    Remove
                    </button>
                </div>
            </div>
        </article>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value))
    }
}

export default connect(null, mapDispatchToProps)(Cart);
