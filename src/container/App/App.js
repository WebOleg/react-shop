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
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productsInCart={productsInCart} />
                <Main
                    productsInCart={productsInCart}
                    addProductToCart={addProductToCart}
                />
            </StyledEngineProvider>
        </>
    )
}

export default App
