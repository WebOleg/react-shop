import React from 'react'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

const MenuItem = ({ link, children }) => {
    return (
        <Button>
            <NavLink
                to={link}
                className={({ isActive }) =>
                    isActive ? 'menu-item-active' : 'menu-item'
                }
            >
                {children}
            </NavLink>
        </Button>
    )
}

export default MenuItem
