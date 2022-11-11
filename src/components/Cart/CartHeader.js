import React from 'react'

const CartHeader = ({ cartData }) => {
    return (
        <div>
            <div>{cartData.totalCount}</div>
            <div>${cartData.totalPrice}</div>
        </div>
    )
}

export default CartHeader
