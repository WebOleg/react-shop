import React, { useState } from 'react'
import Header from '../Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { Button } from '@mui/material'
import { omit } from 'lodash'

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
            return omit(prevState, [id])
        })
    }

    const onDecrementObject = (id) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: prevState[id] - 1,
        }))
    }
    const onIncrementObject = (id) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: prevState[id] + 1,
        }))
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productsInCart={productsInCart} />
                <Main
                    onDecrementObject={onDecrementObject}
                    onIncrementObject={onIncrementObject}
                    productsInCart={productsInCart}
                    addProductToCart={addProductToCart}
                    removeProductFromCart={removeProductFromCart}
                />
            </StyledEngineProvider>
        </>
    )
}

export default App
