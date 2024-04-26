import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Paper, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';

export default function ItineraryAndTreatmentPlan({ selectedHospital }) {
    const [itineraryData, setItineraryData] = useState([]);

    useEffect(() => {
        const fetchItineraryData = async () => {
            try {
                const response = await axios.get('https://us-central1-serene-sl.cloudfunctions.net/SereneSL/itinerary');
                setItineraryData(response.data);
            } catch (error) {
                console.error('Error fetching itinerary data:', error);
            }
        };
        fetchItineraryData();
    }, []);

    const updatedItineraryData = itineraryData.map((day) => ({
        ...day,
        morning: day.morning.replace('CDH', selectedHospital.name),
        title: day.title.replace('CDH', selectedHospital.name)
    }));

    return (
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, marginTop: 2 }}>
            <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>Trip Itinerary</Typography>
            <List>
                {updatedItineraryData.map((day, index) => (
                    <React.Fragment key={index}>
                        <ListItem>
                            <ListItemText primary={`Day ${index + 1}: ${day.title}`} />
                        </ListItem>
                        <ListItem>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="subtitle1">Morning</Typography>
                                    <Typography>{day.morning}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="subtitle1">Afternoon</Typography>
                                    <Typography>{day.afternoon}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="subtitle1">Evening</Typography>
                                    <Typography>{day.evening}</Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                        {index < updatedItineraryData.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    );
}
