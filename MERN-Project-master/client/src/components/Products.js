import React from 'react'
import Product from './Product'
import { ListItem } from '@material-ui/core';

const Products = (props) => {
    return (
        <div>
        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>

            {props.products.map((product, idx) => {
                return (
                    <div key={idx} style={{width: '30%', margin:'20px 0'}}>
                        <Product product={product} />
                    </div>

                )
            })}
        </div>

        </div>
    )
}

export default Products
