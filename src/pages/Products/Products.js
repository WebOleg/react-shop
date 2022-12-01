import ProductsList from 'components/Products/ProductsList'
import React from 'react'

const Products = ({ addProductToCart }) => {
    return (
        <>
            <ProductsList addProductToCart={addProductToCart} />
        </>
    )
}

export default Products
