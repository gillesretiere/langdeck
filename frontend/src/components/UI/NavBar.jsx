import React from 'react'
import { Link } from 'react-router-dom'


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { LGDK_LOGO_NOTEXT } from "../../assets/images";

const NavBar = () => {
  
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
            <div className={`ml-4 font-secondary_font font-semibold`}>
              Les Saynètes
            </div>            
            <div className={`ml-2 font-secondary_font font-semibold text-primary-orange`}>
              Le diabète
            </div>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar