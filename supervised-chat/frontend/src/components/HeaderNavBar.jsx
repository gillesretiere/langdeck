import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-langdeck-w_fpt-v1.png';

const HeaderNavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Link to="/">
                    <Box
                    component="img"
                    display="flex"
                    sx={{ height: 54, flexGrow: 0}}
                    alt="Logo"
                    src={logo}>
                    </Box>
                </Link>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default HeaderNavBar