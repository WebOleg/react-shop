import React, { useState } from 'react'
import Header from '../Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { Button } from '@mui/material'

const App = () => {
    const [productsInCart, setProductsInCart] = useState({})
    const addProductToCart = (id, count) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    const removeProductFromCart = (id) => {
        setProductsInCart((prevState) => {
            // const prevProductsInCart = {
            //     ...prevState,
            // }
            const prevProductsInCart = Object.assign({}, prevState)
            delete prevProductsInCart[id]
            return prevProductsInCart
        })
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productsInCart={productsInCart} />
                <Button onClick={() => removeProductFromCart(1)}>
                    removeProductFromCart
                </Button>
                <Main
                    productsInCart={productsInCart}
                    addProductToCart={addProductToCart}
                />
            </StyledEngineProvider>
        </>
    )
}

export default App
