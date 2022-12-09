import React from 'react'
import productsArray from 'utils/productsArray'

const CartHeader = ({ productsInCart }) => {
    return (
        <div>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsArray[productId - 1].title}:
                        {productsInCart[productId]}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartHeader
