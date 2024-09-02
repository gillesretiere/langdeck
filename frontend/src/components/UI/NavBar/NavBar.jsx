// https://codesandbox.io/p/sandbox/material-ui-5-hamburger-menu-navigation-fms85m

import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

import { LGDK_LOGO_NOTEXT_BLUE } from "../../../assets/images";
import { navLinks, currentVersion, } from "../../../assets/constants/index.js";



const StyledSearch = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.secondary.light, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.secondary.light, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto"
    }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.secondary.contrastText,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        color: theme.palette.secondary.contrastText,
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch"
        }
    }
}));


//search as JSX
const search = (
    <StyledSearch>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Suchen…"
            inputProps={{ "aria-label": "search" }}
        />
    </StyledSearch>
);


const NavBar = ({ props }) => {
    //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
    const [open, setState] = useState(false);

    //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        //changes the function state according to the value of open
        setState(open);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="lg" disableGutters="true">
                <Toolbar>
                    <Typography >
                        <a href="/">
                            <img src={LGDK_LOGO_NOTEXT_BLUE} alt="logo" width="64" />
                        </a>
                    </Typography>
                    <Typography variant="secondary" sx={{ flexGrow: 1, fontWeight: 700, color: "secondary.contrastText" }}>
                        <div>
                            {currentVersion.product} | {currentVersion.subProduct}
                        </div>
                    </Typography>

                    <Box
                        component="div"
                        sx={{
                            display: {
                                xs: "none",
                                md: "block"
                            }
                        }}
                    >
                        {search}
                    </Box>

                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                        sx={{
                            mr: 2,
                            color: "secondary.main",
                            display: {
                                xs: "block",
                                md: "none"
                            }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* The outside of the drawer */}
                    <Drawer
                        //from which side the drawer slides in
                        anchor="right"
                        //if open is true --> drawer is shown
                        open={open}
                        //function that is called when the drawer should close
                        onClose={toggleDrawer(false)}
                        //function that is called when the drawer should open
                        onOpen={toggleDrawer(true)}
                    >
                        {/* The inside of the drawer */}
                        <Box
                            sx={{
                                p: 2,
                                height: 1,
                                backgroundColor: "secondary.main"
                            }}
                        >
                            {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
                            <IconButton sx={{ mb: 2 }}>
                                <CloseIcon onClick={toggleDrawer(false)} />
                            </IconButton>

                            <Divider sx={{ mb: 2 }} />

                            <Box sx={{ mb: 2 }}>
                                {/* on itère sur les liens de navigations intrapage : ajout du lien 
               https://stackoverflow.com/questions/47206639/how-to-add-a-link-to-a-list-in-material-ui-1-0
               */}
                                {navLinks.map(
                                    (item) => (
                                        <ListItemButton component="a" href={item.href} >
                                            <ListItemIcon>
                                                <DescriptionIcon sx={{ color: "secondary.contrastText" }} />
                                            </ListItemIcon>
                                            <ListItemText primary={item.label} sx={{ color: "secondary.contrastText" }} />
                                        </ListItemButton>
                                    )
                                )}
                            </Box>

                            {search}

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    position: "absolute",
                                    bottom: "0",
                                    left: "50%",
                                    transform: "translate(-50%, 0)"
                                }}
                            >
                                <Button variant="contained" sx={{
                                    m: 1, width: 0.5, backgroundColor: "secondary.dark",
                                }}>
                                    Register
                                </Button>
                                <Button variant="outlined" sx={{ m: 1, width: 0.5 }}>
                                    Login
                                </Button>
                            </Box>
                        </Box>
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar