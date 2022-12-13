import React from 'react'
import productsArray from 'utils/productsArray'

const productsObject = productsArray.reduce(
    (object, product) => ({
        ...object,
        [product.id]: product,
    }),
    {}
)
console.log(productsArray)
console.log(productsObject)
const CartHeader = ({ productsInCart }) => {
    return (
        <div>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[productId].title}:
                        {productsInCart[productId]}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartHeader
