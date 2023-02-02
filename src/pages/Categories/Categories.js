import React from 'react'
import Category from 'components/Category/Category'
const Categories = ({ toggleLike, productsLike, addProductToCart }) => {
    return (
        <Category
            toggleLike={toggleLike}
            productsLike={productsLike}
            addProductToCart={addProductToCart}
        ></Category>
    )
}

export default Categories
