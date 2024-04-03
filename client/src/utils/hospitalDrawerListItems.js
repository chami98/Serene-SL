import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import FlightIcon from '@mui/icons-material/Flight';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import MailIcon from '@mui/icons-material/Mail';
import EventIcon from '@mui/icons-material/Event';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';


const handleLogout = async () => {
    // Sign out user from Firebase
    firebase.auth()
        .signOut()
        .then(() => {
            console.log('User signed out successfully');
            localStorage.removeItem('isAuthenticated');
            window.location.href = '/signin';
        })
        .catch((error) => {
            console.error('Error signing out:', error.message);
        });
};

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Appointments" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
                <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log out" />
        </ListItemButton>
    </React.Fragment>
);
