import React from 'react'
import { Card, CardContent, Typography, CardMedia, Grid, Box } from '@mui/material';
import hospitalData from '../utils/HospitalData';
import { useState } from 'react';
import { useEffect } from 'react';

export default function RecommendedHospital({ recomendedHospitals }) {

    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        setHospitals(recomendedHospitals);
    }, []);
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
                    Recommended Hospitals
                </Typography>
            </Box>
            <Grid container spacing={3} justifyContent="center">
                {hospitals.map((hospital, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Hospital"
                                height="180"
                                image={hospital.imageUrl}
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {hospital.name}
                                </Typography>
                                <Typography color="textSecondary">
                                    {hospital.type}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {hospital.location}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </>

    )
}
