import {
    Card,
    CardActions,
    CardContent,
    Button,
    TextField,
} from '@mui/material'
import React, { useState } from 'react'
import './ProductsListItem.scss'

const ProductsListItem = ({
    image,
    title,
    describe,
    type,
    capacity,
    price,
    addProductToCart,
}) => {
    const [count, setCount] = useState(1)

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }
    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }
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
                    <div className="cardinf product-quantity">
                        <Button
                            disabled={count <= 1}
                            onClick={onDecrement}
                            size="large"
                            variant="outlined"
                        >
                            -
                        </Button>
                        <TextField value={count} readonly size="small" />
                        <Button
                            disabled={count >= 10}
                            onClick={onIncrement}
                            size="large"
                            variant="outlined"
                        >
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="wrap-btn">
                    <Button
                        onClick={() => addProductToCart(price, count)}
                        variant="contained"
                    >
                        Add To Cart
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default ProductsListItem
