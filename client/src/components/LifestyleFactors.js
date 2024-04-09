import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function LifestyleFactors() {
    const [formData, setFormData] = useState({
        exercise: false,
        smoking: false,
        alcohol: false,
        sleepHours: '',
        stressLevel: '',
        hydration: '',
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
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
                    Lifestyle Factors
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Exercise (hours per week)"
                                name="exercise"
                                type="number"
                                value={formData.exercise}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Average Sleep Hours"
                                name="sleepHours"
                                type="number"
                                value={formData.sleepHours}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display="flex" alignItems="center">
                                <Checkbox checked={formData.smoking} onChange={handleChange} name="smoking" />
                                <Typography variant="body1" component="span">Smoking</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display="flex" alignItems="center">
                                <Checkbox checked={formData.alcohol} onChange={handleChange} name="alcohol" />
                                <Typography variant="body1" component="span">Alcohol Consumption</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Stress Level (1-10)"
                                name="stressLevel"
                                type="number"
                                value={formData.stressLevel}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Hydration (cups per day)"
                                name="hydration"
                                type="number"
                                value={formData.hydration}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
}
