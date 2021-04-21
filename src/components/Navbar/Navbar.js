import React, { useState, useEffect } from 'react';
import { MdShoppingCart } from "react-icons/md";
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const Navbar = ({cart}) => {

    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        let count = 0;
        cart.forEach(item => count += item.qty)
        setCartCount(count)
    }, [cart, cartCount])

    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__container--logo">
                    <Link to="/">The Shop&trade;</Link>
                </div>
                <div className="nav__container--cart">
                    <Link to="/cart">My cart</Link>
                    <p><MdShoppingCart/><span>{cartCount}</span></p>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Navbar);
