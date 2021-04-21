import React, {useState, useEffect} from 'react';
import Cart from './Cart';
import { connect } from 'react-redux'

function CartList({ cart }) {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach(item => {
            items += item.qty;
            price += item.qty * item.price;
        })

        setTotalItems(items);
        setTotalPrice(price);

    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])

    return (
        <div className="checkout">
            <div className="checkout-basket">
            {
                cart.map(item => <Cart key={item.id} item={item}/>)
            }
            </div>
            <div className="checkout-info">
                <div className="checkout-info__summary">
                    <h3>Shopping Summary</h3>
                    <p>Number of items: <strong>{totalItems}</strong></p>
                    <p>Total: <strong>R{totalPrice}</strong></p>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(CartList);
