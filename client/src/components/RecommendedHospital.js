import React from 'react'
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
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
            <Typography
                variant="h6"
                component="h2"
                color="textPrimary"
                gutterBottom
                sx={{ mb: '25px' }}
            >
                Recommended Hospital

            </Typography>
            {
                hospitals.map((hospital, index) => (
                    <Card style={{ maxWidth: 400, marginBottom: 20 }} key={index}>
                        <CardMedia
                            component="img"
                            alt={'Hospital'}
                            height="200"
                            image={hospital.imageUrl} // assuming hospital object has an 'imageUrl' property
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
                ))
            }
        </>

    )
}
