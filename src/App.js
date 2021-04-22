import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import CartList from './components/Cart/CartList';
import Item from './components/Item/Item';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/Products/ProductList';

import { connect } from 'react-redux';

function App({ currentItem }) {
    return (
        <section className="container">
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <ProductList />
                    </Route>
                    <Route exact path="/product/:id">
                        {
                            !currentItem ? (<Redirect to="/" />) : <Item/>
                        }
                    </Route>
                    <Route exact path="/cart">
                        <CartList />
                    </Route>
                </Switch>
            </Router>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem
    }
}
  
export default connect(mapStateToProps)(App);