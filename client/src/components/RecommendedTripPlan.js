import { Box, Typography } from '@mui/material';
import React from 'react';

const RecommendedTripPlan = () => {
    return (
        <>
            <Box textAlign="center">
                <Typography
                    variant="h5"
                    component="h2"
                    color="textPrimary"
                    gutterBottom
                    sx={{ mb: '25px' }}
                >
                    Recommended Travel Destinations
                </Typography>
            </Box>
        </>
    );
}

export default RecommendedTripPlan;