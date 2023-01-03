import ProductsList from 'components/Products/ProductsList'
import React from 'react'

const Products = ({ productsLike, addProductToCart }) => {
    return (
        <>
            <ProductsList
                productsLike={productsLike}
                addProductToCart={addProductToCart}
            />
        </>
    )
}

export default Products
