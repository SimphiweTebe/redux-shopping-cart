import React from 'react';
import { Switch, Route} from 'react-router-dom';
import CartList from './components/Cart/CartList';
import Item from './components/Item/Item';
import { Navbar } from './components/Navbar/Navbar';
import ProductList from './components/Products/ProductList';

function App() {
    return (
        <div>
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
        </div>
    )
}

export default App;