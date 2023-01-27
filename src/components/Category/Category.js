import { Button, Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import productsArray from 'utils/productsArray'
import ProductsListItem from 'components/Products/ProductsListItem'
import './Category.scss'

const Category = () => {
    const filteredArray = productsArray.filter(function (product) {
        return product.category == 'apple'
    })

    return (
        <section>
            <Grid
                container
                spacing={4}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {filteredArray.map(
                    ({
                        id,
                        image,
                        category,
                        title,
                        describe,
                        type,
                        price,
                        capacity,
                    }) => (
                        <Grid sm={4} item>
                            <ProductsListItem
                                id={id}
                                image={image}
                                category={category}
                                title={title}
                                describe={describe}
                                type={type}
                                price={price}
                                capacity={capacity}
                                // isLiked={productsLike[id]}
                                // toggleLike={toggleLike}
                                // addProductToCart={addProductToCart}
                            ></ProductsListItem>
                        </Grid>
                    )
                )}
            </Grid>
        </section>
    )
}

export default Category
