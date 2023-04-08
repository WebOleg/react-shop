import React from 'react'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtanded from 'components/CartProductList/CartProductListItemExtanded'
import PageTitle from 'components/PageTitle/PageTitle'

const Cartpage = ({
    removeProductFromCart,
    productsInCart,
    changeProductQuantity,
    productsLike,
    toggleLike,
}) => {
    return (
        <div className="card-item">
            <PageTitle>Cart</PageTitle>
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
