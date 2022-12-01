import React from 'react'

const CartHeader = ({ productsInCart }) => {
    return (
        <div>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div>
                        {productId}:{productsInCart[productId]}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartHeader
