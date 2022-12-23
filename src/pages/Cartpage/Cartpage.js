import React from 'react'
import productsArray, { getProductsObject } from 'utils/productsArray'

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
            <div className="total">
                Total:
                {Object.keys(productsInCart).reduce(
                    (sum, id) =>
                        sum + productsObject[id].price * productsInCart[id],
                    0
                )}
            </div>
        </div>
    )
}

export default Cartpage
