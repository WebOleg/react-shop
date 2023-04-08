import { Typography } from '@mui/material'
import React from 'react'

const PageTitle = ({ children }) => {
    return (
        <Typography variant="h4" component={'h1'} sx={{ marginBottom: '20px' }}>
            {children}
        </Typography>
    )
}

export default PageTitle
