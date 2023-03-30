import { Card, CardContent, Button } from '@mui/material'
import React from 'react'
import './CartProductItem.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

const CartProductListItemExtanded = ({
    removeProductFromCart,
    count,
    product,
    changeProductQuantity,
    productsLike,
    toggleLike,
}) => {
    return (
        <Card variant="outlined" className="card-item">
            <CardContent className="content">
                <Button onClick={() => toggleLike(product.id)}>
                    {productsLike[product.id] ? (
                        <FavoriteIcon></FavoriteIcon>
                    ) : (
                        <FavoriteBorderIcon></FavoriteBorderIcon>
                    )}
                </Button>
                <div className="name">{product.title}</div>
                <div className="center">
                    <img alt={product.title} src={product.image}></img>
                </div>
                <div className="price">
                    For one item - <strong>{product.price}</strong>
                </div>
                <div className="count">
                    Count: <strong>{count}</strong>
                </div>
                <Quantity
                    minCount={0}
                    onDecrement={() => {
                        if (count <= 1) {
                            removeProductFromCart(product.id)
                        } else {
                            changeProductQuantity(product.id, count - 1)
                        }
                    }}
                    onIncrement={() =>
                        changeProductQuantity(product.id, count + 1)
                    }
                    count={count}
                ></Quantity>
                <Button
                    variant="outlined"
                    onClick={() => removeProductFromCart(product.id)}
                >
                    <DeleteIcon></DeleteIcon>
                </Button>
            </CardContent>
        </Card>
    )
}

export default CartProductListItemExtanded
