import React from 'react'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'
import { Grid, Typography } from '@mui/material'
import './ProductsList.scss'

const ProductsList = ({
    addLike,
    removeLike,
    productsLike,
    addProductToCart,
}) => {
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
                    ({ id, image, title, describe, type, price, capacity }) => (
                        <Grid key={id} sm={4} item>
                            <ProductsListItem
                                id={id}
                                image={image}
                                title={title}
                                describe={describe}
                                type={type}
                                price={price}
                                capacity={capacity}
                                isLiked={productsLike[id]}
                                addLike={addLike}
                                removeLike={removeLike}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
