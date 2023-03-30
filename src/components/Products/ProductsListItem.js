import { Card, CardActions, CardContent, Button } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import React, { useState } from 'react'
import './ProductsListItem.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link } from 'react-router-dom'

const ProductsListItem = ({
    image,
    title,
    describe,
    type,
    capacity,
    price,
    addProductToCart,
    id,
    category,
    isLiked,
    toggleLike,
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
                    <Button onClick={() => toggleLike(id)}>
                        {isLiked ? (
                            <FavoriteIcon></FavoriteIcon>
                        ) : (
                            <FavoriteBorderIcon></FavoriteBorderIcon>
                        )}
                    </Button>
                    <div className="product-img">
                        <img alt={title} src={image}></img>
                    </div>
                    <h4 className="cardinf">
                        <Link to={`/products/${category}/${id}`}>{title}</Link>
                    </h4>
                    <p className="cardinf">{describe}</p>
                    <div className="cardinf">Type: {type}</div>
                    <div className="cardinf">Capacity: {capacity}GB</div>
                    <div className="cardinf cat_link">
                        Category: <Link to={`${category}`}>{category}</Link>
                    </div>
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
