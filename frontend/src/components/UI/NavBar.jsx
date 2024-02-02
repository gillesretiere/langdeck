import React from 'react'
import {useState, useContext} from 'react';
import { Link, NavLink } from 'react-router-dom'

import { appContext } from "../../App";

import { ThemeProvider, createTheme } from '@mui/material/styles';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import logo from '../../assets/logo-langdeck-w_fpt-v1.png';
import DarkLightModeToggle from "../../components/DarkLightModeToggle"

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Settings', 'About', 'Contact',];

const NavBar = () => {

    const menuItems = useContext(appContext);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
        };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
        };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        };

    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        color="blue_primary">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Link to="/">
                <Box
                component="img"
                display="flex"
                sx={{ height: 54, flexGrow: 0}}
                alt="Logo"
                src={logo}>
                </Box>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, px:1 }}>
            </Typography>
            
            <Button color="inherit">Login</Button>

            {/* more icon menu (settings...) */ }
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton
                    size="large"
                    aria-label="display more actions"
                    edge="end"
                    color="inherit"
                    onClick={handleOpenUserMenu}
                >
                    <MoreIcon />
                </IconButton>                   
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    <MenuItem key="switchdarklightmode" onClick={handleCloseUserMenu}>
                    <Box sx={{ flexGrow: 1 }}>
                    <Link to={{pathname:`/duo/`}}><div><h1>Duo</h1></div></Link>
                    </Box>                      
                    </MenuItem>
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>                        
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar