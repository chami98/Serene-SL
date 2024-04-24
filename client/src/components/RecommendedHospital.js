import React from 'react'
import { Card, CardContent, Typography, CardMedia, Grid, Box } from '@mui/material';
import hospitalData from '../utils/HospitalData';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function RecommendedHospital({ recomendedHospitals, recommendedWellnessCenter, recommendedAyurvedaHospital }) {

    const [hospitals, setHospitals] = useState([]);
    const [wellnessCenter, setWellnessCenter] = useState([]);
    const [ayurvedaHospital, setAyurvedaHospital] = useState([]);

    useEffect(() => {
        setHospitals(recomendedHospitals);
        setWellnessCenter(recommendedWellnessCenter);
        setAyurvedaHospital(recommendedAyurvedaHospital);
    }, []);

    const cardStyles = {
        transition: 'transform 0.3s',
    };



    const handleHover = (e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
    };

    const handleHoverOut = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
    };
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
                        <Link to={hospital.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <Card
                                style={cardStyles}
                                onMouseEnter={handleHover}
                                onMouseLeave={handleHoverOut}
                            >
                                <CardMedia
                                    component="img"
                                    alt={hospital.name}
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
                        </Link>
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Box textAlign="center">
                        <Typography
                            variant="h5"
                            component="h2"
                            color="textPrimary"
                            gutterBottom
                            sx={{ mb: '25px', mt: '25px' }}
                        >
                            Recommended Wellness Center
                        </Typography>
                    </Box>
                    <Grid container spacing={3} justifyContent="center">
                        {wellnessCenter.map((wCenter, index) => (
                            <Grid item xs={12} sm={6} md={12} key={index}>
                                <Link to={wCenter.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                    <Card
                                        style={cardStyles}
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleHoverOut}
                                    >
                                        <CardMedia
                                            component="img"
                                            alt={wCenter.name}
                                            height="180"
                                            image={wCenter.imageUrl}
                                        />
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                                {wCenter.name}
                                            </Typography>
                                            <Typography color="textSecondary">
                                                {wCenter.type}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {wCenter.location}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                {/* Recommended Ayurveda Hospital */}
                <Grid item xs={12} md={6}>
                    <Box textAlign="center">
                        <Typography
                            variant="h5"
                            component="h2"
                            color="textPrimary"
                            gutterBottom
                            sx={{ mb: '25px', mt: '25px' }}
                        >
                            Recommended Ayurveda Hospital
                        </Typography>
                    </Box>
                    <Grid container spacing={3} justifyContent="center">
                        {ayurvedaHospital.map((aHospital, index) => (
                            <Grid item xs={12} sm={6} md={12} key={index}>
                                <Link to={aHospital.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                    <Card
                                        style={cardStyles}
                                        onMouseEnter={handleHover}
                                        onMouseLeave={handleHoverOut}
                                    >
                                        <CardMedia
                                            component="img"
                                            alt={aHospital.name}
                                            height="180"
                                            image={aHospital.imageUrl}
                                        />
                                        <CardContent>
                                            <Typography variant="h5" component="h2">
                                                {aHospital.name}
                                            </Typography>
                                            <Typography color="textSecondary">
                                                {aHospital.type}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {aHospital.location}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

        </>

    )
}
