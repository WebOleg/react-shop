import React from 'react'
import productsArray, { getProductsObject } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'
import './CartProductItem.scss'

const CartProductList = ({
    productsObject = getProductsObject(productsArray),
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
    productsLike,
    toggleLike,
    CartItem = CartProductListItem,
}) => {
    return (
        <div className="container group">
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    toggleLike={toggleLike}
                    changeProductQuantity={changeProductQuantity}
                    removeProductFromCart={removeProductFromCart}
                    count={productsInCart[productId]}
                    product={productsObject[productId]}
                    key={productId}
                    productsLike={productsLike}
                />
            ))}
        </div>
    )
}

export default CartProductList
