import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function CurrentHealthStatus() {
    const [formData, setFormData] = useState({
        bloodPressure: '',
        bloodSugar: '',
        cholesterol: '',
        heartRate: '',
        respiratoryRate: '',
        temperature: '',
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
                    Current Health Status
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Blood Pressure"
                                name="bloodPressure"
                                value={formData.bloodPressure}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Blood Sugar Level"
                                name="bloodSugar"
                                value={formData.bloodSugar}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Cholesterol Level"
                                name="cholesterol"
                                value={formData.cholesterol}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Heart Rate"
                                name="heartRate"
                                value={formData.heartRate}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Respiratory Rate"
                                name="respiratoryRate"
                                value={formData.respiratoryRate}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Temperature"
                                name="temperature"
                                value={formData.temperature}
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
