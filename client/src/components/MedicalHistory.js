import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function MedicalHistory() {
    const [formData, setFormData] = useState({
        age: '',
        gender: '',
        allergies: false,
        diabetes: false,
        hypertension: false,
        heartDisease: false,
        otherConditions: ''
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
            <Paper elevation={3} style={{ padding: '40px', margin: 'auto' }}>
                <Typography variant="h5" component="h2" color="textPrimary" sx={{ marginBottom: '10px' }}>
                    Medical History
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Box display="flex" sx={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <RadioGroup
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    row
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Age"
                                name="age"
                                type="number"
                                value={formData.age}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display="flex" sx={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <FormControlLabel
                                    control={<Checkbox checked={formData.diabetes} onChange={handleChange} name="diabetes" />}
                                    label="Diabetes"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={formData.hypertension} onChange={handleChange} name="hypertension" />}
                                    label="Hypertension"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={formData.heartDisease} onChange={handleChange} name="heartDisease" />}
                                    label="Heart Disease"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Other Medical Conditions"
                                name="otherConditions"
                                value={formData.otherConditions}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
}
