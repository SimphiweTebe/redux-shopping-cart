import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import './Navbar.scss';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__container--logo">
                    <Link to="/">Shopping Cart</Link>
                </div>
                <div className="nav__container--cart">
                    <Link to="/cart">My cart</Link>
                    <p><MdShoppingCart/><span>0</span></p>
                </div>
            </div>
        </nav>
    )
}
