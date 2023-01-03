import { ClassNames } from '@emotion/react'
import { Card, CardContent, Button, TextField } from '@mui/material'
import React from 'react'
import './CartProductItem.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'

const CartProductListItemExtanded = ({
    onDecrementObject,
    onIncrementObject,
    removeProductFromCart,
    count,
    product,
}) => {
    return (
        <Card className="card-item">
            <CardContent className="content">
                <div className="name">{product.title}</div>
                <img src={product.image}></img>
                <div className="price">
                    For one item - <strong>{product.price}</strong>
                </div>
                <div className="count">
                    Count: <strong>{count}</strong>
                </div>
                <Quantity
                    onDecrement={() => onDecrementObject(product.id)}
                    onIncrement={() => onIncrementObject(product.id)}
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
