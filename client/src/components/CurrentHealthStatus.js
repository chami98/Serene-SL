import React from 'react'
import Typography from '@mui/material/Typography';


export default function CurrentHealthStatus() {
    return (
        <div style={{ textAlign: 'center', marginTop: "20px" }}>
            <Typography
                variant="h5"
                component="h2"
                color="textPrimary"

            >
                Current Health Status
            </Typography>
        </div>
    )
}
