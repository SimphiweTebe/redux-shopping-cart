import React from 'react';
import './Products.scss';

import Product from './Product';
import {products} from '../../data';

function ProductList() {
    console.log(products)
    return (
        <section className="products">
            {
                products.map((item) => <Product key={item.id} product={item}/>)
            }
        </section>
    )
}

export default ProductList
