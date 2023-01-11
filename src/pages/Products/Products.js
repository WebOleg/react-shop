import ProductsList from 'components/Products/ProductsList'
import React from 'react'

const Products = ({
    addLike,
    removeLike,
    productsLike,
    addProductToCart,
    toggleLike,
}) => {
    return (
        <>
            <ProductsList
                productsLike={productsLike}
                toggleLike={toggleLike}
                addProductToCart={addProductToCart}
            />
        </>
    )
}

export default Products
