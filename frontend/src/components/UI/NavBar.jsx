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
import { LGDK_LOGO_NOTEXT, HM_LOGO_RED } from "../../assets/images";


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
        color="white">
        <Toolbar>

            <Link to="/">
                <Box
                component="img"
                display="flex"
                sx={{ height: 54, flexGrow: 0}}
                alt="Logo"
                src={LGDK_LOGO_NOTEXT}>
                </Box>
            </Link>
            <div className={`ml-4`}>
              Les Saynètes
            </div>            
            <div className={`ml-2 font-bold text-red-700`}>
              Le diabète
            </div>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar