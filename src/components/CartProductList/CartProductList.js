import React from 'react'
import productsArray, { getProductsObject } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'
import './CartProductItem.scss'

const CartProductList = ({
    onIncrementObject,
    onDecrementObject,
    productsObject = getProductsObject(productsArray),
    productsInCart,
    removeProductFromCart,
    CartItem = CartProductListItem,
}) => {
    return (
        <div className="container group">
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    onIncrementObject={onIncrementObject}
                    onDecrementObject={onDecrementObject}
                    removeProductFromCart={removeProductFromCart}
                    count={productsInCart[productId]}
                    product={productsObject[productId]}
                    key={productId}
                />
            ))}
        </div>
    )
}

export default CartProductList
