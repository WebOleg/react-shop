import React from 'react'
import productsArray, { getProductsObject } from 'utils/productsArray'
import CartTotal from 'components/CartTotal/CartTotal'

const Cartpage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <div className="card-item">
            <h1>Cart</h1>
            <div className="list">
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[productId].title}:
                        {productsInCart[productId]}
                    </div>
                ))}
            </div>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default Cartpage
