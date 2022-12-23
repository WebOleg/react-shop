import React, { useState } from 'react'
import './Pop-up.scss'
import './CartHeader.scss'
import CloseIcon from '@mui/icons-material/Close'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'
import productsArray, { getProductsObject } from 'utils/productsArray'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'

const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    const [popUpShow, setPopUpShow] = useState(false)
    const productsCount = Object.keys(productsInCart).reduce(
        (sum, id) => sum + productsInCart[id],
        0
    )

    return (
        <div>
            <div className="cart_menu">
                <ShoppingCartIcon onClick={() => setPopUpShow(true)} />
                <span>{productsCount}</span>
            </div>
            {popUpShow && (
                <div className="card-modal">
                    <div className="card-item">
                        <div className="link">
                            <Link
                                onClick={() => setPopUpShow(false)}
                                to={'/cart'}
                            >
                                <ShoppingCartIcon
                                    onClick={() => setPopUpShow(true)}
                                />
                            </Link>
                        </div>
                        <div className="close">
                            <CloseIcon onClick={() => setPopUpShow(false)} />
                        </div>
                        <h1>Cart</h1>
                        <CartProductList productsInCart={productsInCart} />
                        <CartTotal productsInCart={productsInCart} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartHeader
