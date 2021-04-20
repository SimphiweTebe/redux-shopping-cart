import React from 'react';
import './Products.scss';

import { connect } from 'react-redux';

import Product from './Product';
// import {products} from '../../data';

function ProductList({products}) {

    // const myList = products;
    console.log(products)
    
    return (
        <section className="products">
            {
                products.map((item) => <Product key={item.id} product={item}/>)
            }
        </section>
    )
}

const mapStateToProps = state => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(ProductList);
