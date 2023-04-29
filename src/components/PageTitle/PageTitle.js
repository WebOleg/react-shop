import { Typography } from '@mui/material'
import React from 'react'

const PageTitle = ({ children }) => {
    return (
        <Typography
            variant="h4"
            component={'h1'}
            sx={{
                marginTop: '35px',
                marginBottom: '35px',
                textAlign: 'start',
            }}
        >
            {children}
        </Typography>
    )
}

export default PageTitle
