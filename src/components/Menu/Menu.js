import React from 'react'

import './Menu.scss'
import MenuItem from './MenuItem'

const menu = () => {
    return (
        <>
            <MenuItem link="/">Home</MenuItem>
            <MenuItem link="/contact">Contact</MenuItem>
            <MenuItem link="/about">About</MenuItem>
            <MenuItem link="/products">Products</MenuItem>
            <MenuItem link="/cart">Cart</MenuItem>
        </>
    )
}

export default menu
