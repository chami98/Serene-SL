import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

export default function UserPreferences() {
    const [formData, setFormData] = useState({
        destinationPreference: [],
        travelCompanions: '',
        budgetRange: '',
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
                    User Preferences
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} >
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="destination-preference-label">Which type of destination do you prefer for health, medical, or wellness tourism?</InputLabel>
                                <Select
                                    labelId="destination-preference-label"
                                    id="destination-preference-select"
                                    multiple
                                    value={formData.destinationPreference}
                                    onChange={handleChange}
                                    name="destinationPreference"
                                >
                                    <MenuItem value="Tropical beach resorts">Tropical beach resorts</MenuItem>
                                    <MenuItem value="Mountain retreats">Mountain retreats</MenuItem>
                                    <MenuItem value="Urban wellness centers">Urban wellness centers</MenuItem>
                                    <MenuItem value="Rural or countryside retreats">Rural or countryside retreats</MenuItem>
                                    <MenuItem value="Specific destination">Specific destination (specify)</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="travel-companions-label">Will you be traveling alone or with companions?</InputLabel>
                                <Select
                                    labelId="travel-companions-label"
                                    id="travel-companions-select"
                                    value={formData.travelCompanions}
                                    onChange={handleChange}
                                    name="travelCompanions"
                                >
                                    <MenuItem value="Alone">Alone</MenuItem>
                                    <MenuItem value="With family members">With family members</MenuItem>
                                    <MenuItem value="With friends or partners">With friends or partners</MenuItem>
                                    <MenuItem value="Group tour with strangers">Group tour with strangers</MenuItem>
                                    <MenuItem value="Other">Other (specify)</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="budget-range-label">What is your budget range for your trip?</InputLabel>
                                <Select
                                    labelId="budget-range-label"
                                    id="budget-range-select"
                                    value={formData.budgetRange}
                                    onChange={handleChange}
                                    name="budgetRange"
                                >
                                    <MenuItem value="Low budget">Low budget</MenuItem>
                                    <MenuItem value="Moderate budget">Moderate budget</MenuItem>
                                    <MenuItem value="High budget">High budget</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
}
