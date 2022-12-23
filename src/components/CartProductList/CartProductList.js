import React from 'react'
import productsArray, { getProductsObject } from 'utils/productsArray'

const CartProductList = ({
    productsObject = getProductsObject(productsArray),
    productsInCart,
}) => {
    return (
        <div className="list">
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[productId].title}:
                    {productsInCart[productId]}
                </div>
            ))}
        </div>
    )
}

export default CartProductList
