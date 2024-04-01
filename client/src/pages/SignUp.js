import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Autocomplete } from '@mui/material';
import countries from '../utils/countries';

const defaultTheme = createTheme();

export default function SignUp() {
    const [userType, setUserType] = React.useState('');
    const [country, setCountry] = React.useState('');

    const handleUserTypeSelect = (type) => {
        setUserType(type);
    };

    const handleBackClick = () => {
        setUserType('');
    };

    const handleCountryChange = (newValue) => {
        setCountry(newValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            userType,
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            country,
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://www.tilaksblog.com/wp-content/uploads/2023/04/1588843579185.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: '#f7f7f7',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'white',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" >
                            {userType === 'tourist' ? ' Sign Up as a Tourist' : userType === 'hospital' ? ' Sign Up as a Hospital' : 'Get Started Now'}
                        </Typography>

                        {userType === '' && (
                            <Box sx={{ mt: 3, textAlign: 'center' }}>
                                <Typography variant="h4" sx={{ mb: 2, color: '#8bc34a' }}>
                                    Welcome to Serene SL!
                                </Typography>
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    Please select your account type:
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Button
                                            onClick={() => handleUserTypeSelect('tourist')}
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                backgroundColor: '#009688',
                                                color: 'white',
                                            }}
                                            startIcon={<LockOutlinedIcon />}
                                        >
                                            As a Tourist
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Button
                                            onClick={() => handleUserTypeSelect('hospital')}
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                backgroundColor: '#c2185b',
                                                color: 'white',
                                            }}
                                            startIcon={<LockOutlinedIcon />}
                                        >
                                            As a Hospital
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        )}

                        {userType == 'tourist' && (
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                                <Autocomplete
                                    id="country-select"
                                    sx={{ width: '100%', mt: 2 }}
                                    options={countries}
                                    autoHighlight
                                    getOptionLabel={(option) => option.label}
                                    onChange={(event, newValue) => {
                                        handleCountryChange(newValue)
                                    }}
                                    renderOption={(props, option) => (
                                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                            <img
                                                loading="lazy"
                                                width="20"
                                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                                alt=""
                                            />
                                            {option.label} ({option.code}) +{option.phone}
                                        </Box>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Country"
                                            inputProps={{
                                                ...params.inputProps,
                                                autoComplete: 'new-password', // disable autocomplete and autofill
                                            }}
                                        />
                                    )}
                                />

                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
                                    Sign Up
                                </Button>
                                <Button onClick={handleBackClick} variant="outlined" fullWidth sx={{ mt: 2 }}>
                                    Back
                                </Button>
                            </Box>
                        )}

                        {userType == 'hospital' && (
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="hospital-name"
                                    label="Hospital Name"
                                    name="hospitalName"
                                    autoComplete="hospitalName"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="location"
                                    label="Location"
                                    name="location"
                                    autoComplete="location"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
                                    Sign Up
                                </Button>
                                <Button onClick={handleBackClick} variant="outlined" fullWidth sx={{ mt: 2 }}>
                                    Back
                                </Button>
                            </Box>
                        )}

                        <Typography variant="body2" sx={{ mt: 2, color: '#666' }}>
                            Already have an account?{' '}
                            <Link href="/signin" variant="body2">
                                Sign in
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
