import React from 'react'
import {useState} from 'react'
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
import logo from '../assets/logo-langdeck-w_fpt-v1.png';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Settings', 'About', 'Contact',];

const NavBar = () => {
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
        color="transparent">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Box
            component="img"
            display="flex"
            sx={{ height: 54, flexGrow: 0}}
            alt="Logo"
            src={logo}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, pl:1 }}>
            Langdeck
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
                    <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        > <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                        </Popover>                       
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