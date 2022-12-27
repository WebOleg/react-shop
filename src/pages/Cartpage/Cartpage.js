import React from 'react'
import productsArray, { getProductsObject } from 'utils/productsArray'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtanded from 'components/CartProductList/CartProductListItemExtanded'

const Cartpage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <div className="card-item">
            <h1>Cart</h1>
            <CartProductList
                CartItem={CartProductListItemExtanded}
                productsInCart={productsInCart}
            />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default Cartpage
