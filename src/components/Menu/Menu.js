import React from 'react'

import './Menu.scss'
import MenuItem from './MenuItem'
import FavoriteIcon from '@mui/icons-material/Favorite'

const menu = () => {
    return (
        <>
            <MenuItem link="/">Home</MenuItem>
            <MenuItem link="/contact">Contact</MenuItem>
            <MenuItem link="/about">About</MenuItem>
            <MenuItem link="/products">Products</MenuItem>
            <MenuItem link="/favourite">
                <FavoriteIcon></FavoriteIcon>
            </MenuItem>
            <MenuItem link="/cart">Cart</MenuItem>
        </>
    )
}

export default menu
