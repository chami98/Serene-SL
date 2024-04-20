import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

export default function MedicalHistory() {
    const [formData, setFormData] = useState({
        gender: '',
        age: '',
        allergies: [],
        medications: []
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            if (checked) {
                setFormData(prevState => ({
                    ...prevState,
                    [name]: [...formData[name], value]
                }));
            } else {
                setFormData(prevState => ({
                    ...prevState,
                    [name]: formData[name].filter(item => item !== value)
                }));
            }
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
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
                    Medical History
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" component="h3" color="textPrimary" gutterBottom>
                                Gender & Age
                            </Typography>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="gender-label">Gender</InputLabel>
                                <Select
                                    labelId="gender-label"
                                    id="gender-select"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    name="gender"
                                >
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                            </FormControl>
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
                            <Typography variant="h6" component="h3" color="textPrimary" gutterBottom>
                                Allergies and Medications
                            </Typography>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="allergies-label">Do you have any known allergies?</InputLabel>
                                <Select
                                    labelId="allergies-label"
                                    id="allergies-select"
                                    multiple
                                    value={formData.allergies}
                                    onChange={handleChange}
                                    name="allergies"
                                >
                                    <MenuItem value="Medications">Medications</MenuItem>
                                    <MenuItem value="Foods">Foods</MenuItem>
                                    <MenuItem value="Environmental factors">Environmental factors</MenuItem>
                                    <MenuItem value="Insects">Insects</MenuItem>
                                    <MenuItem value="Latex">Latex</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="medications-label">Are you currently taking any medications?</InputLabel>
                                <Select
                                    labelId="medications-label"
                                    id="medications-select"
                                    multiple
                                    value={formData.medications}
                                    onChange={handleChange}
                                    name="medications"
                                >
                                    <MenuItem value="Prescription drugs">Prescription drugs</MenuItem>
                                    <MenuItem value="Over-the-counter medications">Over-the-counter medications</MenuItem>
                                    <MenuItem value="Supplements">Supplements</MenuItem>
                                    <MenuItem value="Herbal remedies">Herbal remedies</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
}
