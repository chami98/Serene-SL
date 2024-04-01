import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import FlightIcon from '@mui/icons-material/Flight';
import InboxIcon from '@mui/icons-material/Inbox';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

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
                <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Personal Records" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <FlightIcon />
            </ListItemIcon>
            <ListItemText primary="Past Trips" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Information Hub" />
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
        <ListItemButton>
            <ListItemIcon>
                <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log out" />
        </ListItemButton>
    </React.Fragment>
);
