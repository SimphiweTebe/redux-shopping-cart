import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import CartList from './components/Cart/CartList';
import Item from './components/Item/Item';
import { Navbar } from './components/Navbar/Navbar';
import ProductList from './components/Products/ProductList';

function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <ProductList />
                    </Route>
                    <Route exact path="/product/:id">
                        <Item/>
                    </Route>
                    <Route exact path="/cart">
                        <CartList />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
  
export default App;