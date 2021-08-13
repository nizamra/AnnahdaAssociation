import React from 'react'
import Product from './Product'
import { ListItem } from '@material-ui/core';

const Products = (props) => {
    return (
        <div>
                                <ListItem>

            {props.products.map((product, idx) => {
                return (
                    <div key={idx}>
                        <Product product={product} />
                    </div>

                )
            })}
                                </ListItem>

        </div>
    )
}

export default Products
