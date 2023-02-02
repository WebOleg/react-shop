import { Button, Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import productsArray from 'utils/productsArray'
import ProductsListItem from 'components/Products/ProductsListItem'
import './Category.scss'
import { useParams } from 'react-router'

const Category = ({ toggleLike, productsLike, addProductToCart }) => {
    const categoryName = useParams()
    console.log(categoryName)
    const filteredArray = productsArray.filter(function (product) {
        return product.category == categoryName.category
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
                            ></ProductsListItem>
                        </Grid>
                    )
                )}
            </Grid>
        </section>
    )
}

export default Category
