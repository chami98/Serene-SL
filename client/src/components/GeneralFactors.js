import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function GeneralFactors() {
    const [formData, setFormData] = useState({
        age: '',
        height: '',
        weight: '',
        gender: '',
        occupation: '',
        maritalStatus: '',
        livingSituation: ''
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
                    General Factors
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" component="h3" color="textPrimary" gutterBottom>
                                Personal Information
                            </Typography>
                            <TextField
                                fullWidth
                                label="Age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                type="number"
                                sx={{ marginBottom: '10px' }}
                            />
                            <TextField
                                fullWidth
                                label="Height"
                                name="height"
                                value={formData.height}
                                onChange={handleChange}
                                sx={{ marginBottom: '10px' }}
                            />
                            <TextField
                                fullWidth
                                label="Weight"
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                                sx={{ marginBottom: '10px' }}
                            />
                            <TextField
                                fullWidth
                                label="Occupation"
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleChange}
                                sx={{ marginBottom: '10px' }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" component="h3" color="textPrimary" gutterBottom>
                                Demographics
                            </Typography>
                            <RadioGroup
                                aria-label="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                sx={{ marginBottom: '10px' }}
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                            <FormControl fullWidth sx={{ marginBottom: '10px' }}>
                                <InputLabel id="marital-status-label">Marital Status</InputLabel>
                                <Select
                                    labelId="marital-status-label"
                                    id="marital-status-select"
                                    value={formData.maritalStatus}
                                    onChange={handleChange}
                                    name="maritalStatus"
                                >
                                    <MenuItem value="single">Single</MenuItem>
                                    <MenuItem value="married">Married</MenuItem>
                                    <MenuItem value="divorced">Divorced</MenuItem>
                                    <MenuItem value="widowed">Widowed</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth sx={{ marginBottom: '10px' }}>
                                <InputLabel id="living-situation-label">Living Situation</InputLabel>
                                <Select
                                    labelId="living-situation-label"
                                    id="living-situation-select"
                                    value={formData.livingSituation}
                                    onChange={handleChange}
                                    name="livingSituation"
                                >
                                    <MenuItem value="alone">Alone</MenuItem>
                                    <MenuItem value="withFamily">With Family</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
}
