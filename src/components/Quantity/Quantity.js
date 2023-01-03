import React from 'react'
import { Button, TextField } from '@mui/material'

const Quantity = ({ onIncrement, onDecrement, count }) => {
    return (
        <div className="cardinf product-quantity">
            <Button
                disabled={count <= 1}
                onClick={() => onDecrement()}
                size="large"
                variant="outlined"
            >
                -
            </Button>
            <TextField value={count} readOnly size="small" />
            <Button
                disabled={count >= 10}
                onClick={() => onIncrement()}
                size="large"
                variant="outlined"
            >
                +
            </Button>
        </div>
    )
}

export default Quantity
