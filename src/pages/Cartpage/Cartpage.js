import React from 'react'
import productsArray, { getProductsObject } from 'utils/productsArray'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtanded from 'components/CartProductList/CartProductListItemExtanded'

const Cartpage = ({
    removeProductFromCart,
    productsInCart,
    changeProductQuantity,
    productsLike,
    toggleLike,
}) => {
    return (
        <div className="card-item">
            <h1>Cart</h1>
            <CartProductList
                changeProductQuantity={changeProductQuantity}
                CartItem={CartProductListItemExtanded}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                productsLike={productsLike}
                toggleLike={toggleLike}
            />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default Cartpage
