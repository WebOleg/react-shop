import React from 'react'

const CartProductListItem = ({ product, count }) => {
    console.log(product)
    return (
        <div>
            {product.title}:{count}
        </div>
    )
}

export default CartProductListItem
