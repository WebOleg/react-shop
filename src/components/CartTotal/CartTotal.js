import React from 'react'
import productsArray, { getProductsObject } from 'utils/productsArray'

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <div className="total">
            Total:
            {Object.keys(productsInCart).reduce(
                (sum, id) =>
                    sum + productsObject[id].price * productsInCart[id],
                0
            )}
        </div>
    )
}

export default CartTotal
