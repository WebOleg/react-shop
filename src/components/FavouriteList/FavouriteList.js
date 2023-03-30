import { Card, CardContent, Button } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import productsArray, { getProductsObject } from 'utils/productsArray'
import { Link } from 'react-router-dom'
const FavouriteList = ({
    productsLike,
    productsObject = getProductsObject(productsArray),
    toggleLike,
}) => {
    const productsLikeArray = Object.entries(productsLike)
    const filteredArray = productsLikeArray.filter(
        (likeKey) => likeKey[1] !== false
    )
    const productsLikeObject = Object.fromEntries(filteredArray)

    console.log(productsLikeObject)
    if (filteredArray !== 0) {
        return (
            <div className="container liked">
                {Object.keys(productsLikeObject).map((productsLikeId) => (
                    <Card className="card-item">
                        <CardContent className="content">
                            <Button onClick={() => toggleLike(productsLikeId)}>
                                {productsLike[productsLikeId] ? (
                                    <FavoriteIcon></FavoriteIcon>
                                ) : (
                                    <FavoriteBorderIcon></FavoriteBorderIcon>
                                )}
                            </Button>
                            <div className="name">
                                {productsObject[productsLikeId].title}
                            </div>
                            <div className="center">
                                <img
                                    alt={productsObject[productsLikeId].title}
                                    src={productsObject[productsLikeId].image}
                                ></img>
                            </div>
                            <div className="price">
                                Price for one item:{' '}
                                <strong>
                                    {productsObject[productsLikeId].price}
                                </strong>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )
    } else {
        return (
            <p>
                <Link to="/products">Go to products</Link> Please add some
                products
            </p>
        )
    }
}

export default FavouriteList
