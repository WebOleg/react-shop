import React from 'react'
import productsArray, { getProductsObject } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'
import './CartProductItem.scss'

const CartProductList = ({
    productsObject = getProductsObject(productsArray),
    productsInCart,
    CartItem = CartProductListItem,
}) => {
    return (
        <div className="container group">
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    count={productsInCart[productId]}
                    product={productsObject[productId]}
                    key={productId}
                />
            ))}
        </div>
    )
}

export default CartProductList
