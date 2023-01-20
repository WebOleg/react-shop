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
    const filteredArray = productsLikeArray.filter(
        (likeKey) => likeKey[1] != false
    )

    console.log(filteredArray)

    return (
        <div className="container liked">
            {filteredArray.map((item) => (
                <Card className="card-item">
                    <CardContent className="content">
                        <Button onClick={() => toggleLike(item[0])}>
                            {productsLike[item[0]] ? (
                                <FavoriteIcon></FavoriteIcon>
                            ) : (
                                <FavoriteBorderIcon></FavoriteBorderIcon>
                            )}
                        </Button>
                        <div className="name">
                            {productsObject[item[0]].title}
                        </div>
                        <div className="center">
                            <img src={productsObject[item[0]].image}></img>
                        </div>
                        <div className="price">
                            For one item -
                            <strong>{productsObject[item[0]].price}</strong>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default FavouriteList
