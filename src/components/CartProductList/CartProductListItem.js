import React from 'react'
import './CartProductItem.scss'

const CartProductListItem = ({ product, count }) => {
    console.log(product)
    return (
        <div className="cart_item">
            {product.title}:{count}
        </div>
    )
}

export default CartProductListItem
