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
import Favourite from 'pages/Favourite/Favourite'
import Categories from 'pages/Categories/Categories'

const Main = ({
    productsLike,
    removeProductFromCart,
    addProductToCart,
    productsInCart,
    changeProductQuantity,
    toggleLike,
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
                            <Products
                                productsLike={productsLike}
                                toggleLike={toggleLike}
                                addProductToCart={addProductToCart}
                            />
                        }
                    />
                    <Route
                        path="/favourite"
                        element={
                            <Favourite
                                toggleLike={toggleLike}
                                productsLike={productsLike}
                            />
                        }
                    ></Route>
                    <Route
                        path="/cart"
                        element={
                            <Cartpage
                                changeProductQuantity={changeProductQuantity}
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                                productsLike={productsLike}
                                toggleLike={toggleLike}
                            />
                        }
                    />
                    <Route
                        path="/products/:category"
                        element={
                            <Categories
                                toggleLike={toggleLike}
                                productsLike={productsLike}
                                addProductToCart={addProductToCart}
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
