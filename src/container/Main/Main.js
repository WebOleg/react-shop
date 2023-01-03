import React from 'react'
import './Main.scss'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import About from 'pages/About/About'
import Contact from 'pages/Contact/Contact'
import Article from 'pages/Article/Article'
import Home from 'pages/Home/Home'
import Products from 'pages/Products/Products'
import { Routes, Route } from 'react-router-dom'
import Cartpage from 'pages/Cartpage/Cartpage'

const Main = ({
    onDecrementObject,
    onIncrementObject,
    removeProductFromCart,
    addProductToCart,
    productsInCart,
}) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route
                        path="/products"
                        element={
                            <Products addProductToCart={addProductToCart} />
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <Cartpage
                                onDecrementObject={onDecrementObject}
                                onIncrementObject={onIncrementObject}
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                            />
                        }
                    />
                    <Route path="/articles/:id" element={<Article />} />
                </Routes>
            </Container>
        </>
    )
}

export default Main
