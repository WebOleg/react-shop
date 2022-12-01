import React, { useState } from 'react'
import Header from '../Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'

const App = () => {
    const [productsInCart, setProductsInCart] = useState({
        1: 5,
        2: 5,
        3: 5,
    })
    const addProductToCart = (price, count) => {}
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productsInCart={productsInCart} />
                <Main addProductToCart={addProductToCart} />
            </StyledEngineProvider>
        </>
    )
}

export default App
