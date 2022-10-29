import React from 'react'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './Menu.scss'

const menu = () => {
    return (
        <>
            <Button>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'menu-item-active' : 'menu-item'
                    }
                >
                    Home
                </NavLink>
            </Button>
            <Button>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? 'menu-item-active' : 'menu-item'
                    }
                >
                    Contact
                </NavLink>
            </Button>
            <Button>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'menu-item-active' : 'menu-item'
                    }
                >
                    About
                </NavLink>
            </Button>
            <Button>
                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive ? 'menu-item-active' : 'menu-item'
                    }
                >
                    Products
                </NavLink>
            </Button>
        </>
    )
}

export default menu
