import { Card, CardContent, Button } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import productsArray, { getProductsObject } from 'utils/productsArray'
const FavouriteList = ({
    productsLike,
    productsObject = getProductsObject(productsArray),
    toggleLike,
}) => {
    const productsLikeArray = Object.entries(productsLike)
    const filteredArray = productsLikeArray.filter(function (likeKey) {
        return likeKey[1] != false
    })

    console.log(filteredArray)

    return (
        <div className="container group">
            {Object.keys(productsLike).map((productsLikeId) => (
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
                                src={productsObject[productsLikeId].image}
                            ></img>
                        </div>
                        <div className="price">
                            For one item -
                            <strong>
                                {productsObject[productsLikeId].price}
                            </strong>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default FavouriteList
