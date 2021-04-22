import React from 'react';
import './Products.scss';

import { connect } from 'react-redux';

import Product from './Product';

function ProductList({products}) {
    
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
