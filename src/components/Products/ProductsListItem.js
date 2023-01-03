import {
    Card,
    CardActions,
    CardContent,
    Button,
    TextField,
} from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import React, { useState } from 'react'
import './ProductsListItem.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

const ProductsListItem = ({
    image,
    title,
    describe,
    type,
    capacity,
    price,
    addProductToCart,
    id,
    isLiked,
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
                    <Button>
                        {isLiked ? (
                            <FavoriteIcon></FavoriteIcon>
                        ) : (
                            <FavoriteBorderIcon></FavoriteBorderIcon>
                        )}
                    </Button>
                    <div className="product-img">
                        <img src={image}></img>
                    </div>
                    <h4 className="cardinf">{title}</h4>
                    <p className="cardinf">{describe}</p>
                    <div className="cardinf">Type: {type}</div>
                    <div className="cardinf">Capacity: {capacity}GB</div>
                    <div className="price cardinf">Price: {price}$</div>
                    <Quantity
                        minCount={1}
                        onDecrement={onDecrement}
                        onIncrement={onIncrement}
                        count={count}
                    ></Quantity>
                </CardContent>
                <CardActions className="wrap-btn">
                    <Button
                        onClick={() => addProductToCart(id, count)}
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
