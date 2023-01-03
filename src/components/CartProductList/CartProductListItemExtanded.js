import { ClassNames } from '@emotion/react'
import { Card, CardContent, Button } from '@mui/material'
import React from 'react'
import './CartProductItem.scss'
import DeleteIcon from '@mui/icons-material/Delete'

const CartProductListItemExtanded = ({ count, product }) => {
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
                <Button>
                    <DeleteIcon></DeleteIcon>
                </Button>
            </CardContent>
        </Card>
    )
}

export default CartProductListItemExtanded
