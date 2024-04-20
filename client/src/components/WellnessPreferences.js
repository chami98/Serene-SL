import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function WellnessPreferences() {
    const [formData, setFormData] = useState({
        meditation: false,
        yoga: false,
        exercise: false,
        healthyEating: false,
        spaTreatments: false,
        outdoorActivities: false,
    });

    const handleChange = (event) => {
        const { name, type, checked } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log(formData);
        // Provide visual feedback for submission
        alert('Form submitted successfully!');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Paper elevation={3} style={{ padding: '20px', margin: 'auto' }}>
                <Typography variant="h5" component="h2" color="textPrimary" sx={{ marginBottom: '10px' }}>
                    Wellness Preferences
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Box display="flex" alignItems="center">
                                <Checkbox checked={formData.meditation} onChange={handleChange} name="meditation" />
                                <Typography variant="body1" component="span">Meditation</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display="flex" alignItems="center">
                                <Checkbox checked={formData.yoga} onChange={handleChange} name="yoga" />
                                <Typography variant="body1" component="span">Yoga</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display="flex" alignItems="center">
                                <Checkbox checked={formData.exercise} onChange={handleChange} name="exercise" />
                                <Typography variant="body1" component="span">Exercise</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display="flex" alignItems="center">
                                <Checkbox checked={formData.healthyEating} onChange={handleChange} name="healthyEating" />
                                <Typography variant="body1" component="span">Healthy Eating</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display="flex" alignItems="center">
                                <Checkbox checked={formData.spaTreatments} onChange={handleChange} name="spaTreatments" />
                                <Typography variant="body1" component="span">Spa Treatments</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display="flex" alignItems="center">
                                <Checkbox checked={formData.outdoorActivities} onChange={handleChange} name="outdoorActivities" />
                                <Typography variant="body1" component="span">Outdoor Activities</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
}
