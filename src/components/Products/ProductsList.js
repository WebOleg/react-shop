import React from 'react'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'
import { Grid, Typography } from '@mui/material'
import './ProductsList.scss'
import Reviews from 'components/Reviews/Reviews'

const ProductsList = ({ productsLike, addProductToCart, toggleLike }) => {
    return (
        <>
            <Typography variant="h4" className="productTitle">
                Products List
            </Typography>
            <Grid
                container
                spacing={4}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {productsArray.map(
                    ({
                        id,
                        image,
                        title,
                        describe,
                        type,
                        price,
                        capacity,
                        category,
                    }) => (
                        <Grid key={id} sm={4} item>
                            <ProductsListItem
                                id={id}
                                image={image}
                                category={category}
                                title={title}
                                describe={describe}
                                type={type}
                                price={price}
                                capacity={capacity}
                                isLiked={productsLike[id]}
                                toggleLike={toggleLike}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
            <Reviews></Reviews>
        </>
    )
}

export default ProductsList
