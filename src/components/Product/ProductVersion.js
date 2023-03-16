import React from 'react'
import InfoIcon from '@mui/icons-material/Info'
import { Button } from '@mui/material'

const ProductVersion = ({ changePrice, handleClickVersionInfo }) => {
    return (
        <>
            <div className="product_version">
                <span>
                    <strong>Версия:</strong>
                    <Button onClick={handleClickVersionInfo} variant="outline">
                        <InfoIcon></InfoIcon>
                    </Button>
                </span>
                <Button onClick={() => changePrice(1)} variant="outlined">
                    Global
                </Button>
                <Button onClick={() => changePrice(1.155)} variant="outlined">
                    UA
                </Button>
                <Button onClick={() => changePrice(0.9)} variant="outlined">
                    e-Sim
                </Button>
            </div>
        </>
    )
}

export default ProductVersion
