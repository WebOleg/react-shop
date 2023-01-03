import ProductsList from 'components/Products/ProductsList'
import React from 'react'

const Products = ({ addLike, removeLike, productsLike, addProductToCart }) => {
    return (
        <>
            <ProductsList
                addLike={addLike}
                removeLike={removeLike}
                productsLike={productsLike}
                addProductToCart={addProductToCart}
            />
        </>
    )
}

export default Products
