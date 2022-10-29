import { Card, CardActions, CardContent, Button } from '@mui/material'
import React from 'react'
import './ProductsListItem.scss'

const ProductsListItem = ({
    image,
    title,
    describe,
    type,
    capacity,
    price,
}) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={image}></img>
                    </div>
                    <h4 className="cardinf">{title}</h4>
                    <p className="cardinf">{describe}</p>
                    <div className="cardinf">Type: {type}</div>
                    <div className="cardinf">Capacity: {capacity}GB</div>
                    <div className="price cardinf">Price: {price}$</div>
                </CardContent>
                <CardActions className="wrap-btn">
                    <Button variant="contained">Add To Cart</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default ProductsListItem
