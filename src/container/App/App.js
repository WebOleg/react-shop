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

    const changeProductQuantity = (id, count) =>
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))

    const [productsLike, setProductsLike] = useState({})

    const toggleLike = (id) => {
        setProductsLike((prevState) => {
            if (prevState[id]) {
                return {
                    ...prevState,
                    [id]: false,
                }
            } else {
                return { ...prevState, [id]: true }
            }
        })
    }

    const addLike = (id) =>
        setProductsLike((prevState) => ({
            ...prevState,
            [id]: true,
        }))

    const removeLike = (id) =>
        setProductsLike((prevState) => ({
            ...prevState,
            [id]: false,
        }))
    console.log(productsLike)
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productsInCart={productsInCart} />
                <Main
                    addLike={addLike}
                    removeLike={removeLike}
                    productsLike={productsLike}
                    toggleLike={toggleLike}
                    changeProductQuantity={changeProductQuantity}
                    productsInCart={productsInCart}
                    addProductToCart={addProductToCart}
                    removeProductFromCart={removeProductFromCart}
                />
            </StyledEngineProvider>
        </>
    )
}

export default App
