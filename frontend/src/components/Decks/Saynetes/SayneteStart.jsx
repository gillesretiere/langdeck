import React,  { useState, useContext } from 'react'; 
import DeckContext from "../../../context/DeckContext";
import classes from "./SaynetePlayDeck.module.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const SayneteStart = ({deck}) => {
    let ctx = useContext(DeckContext);
    ctx.saynete_phrases = deck;

    const clickHandler = () => {
        ctx.current_deck.progression_1=deck;
    }

    return (
        <div className={classes.container}> 
            <Link to={{pathname:`/saynete_play_page/${ctx.current_deck.language_deck.language}`}} >
            <Box sx={{ display: 'flex' }} className={classes.mui_button} justifyContent="space-between" alignItems='center'>
            <Button color="blue_primary" fullWidth="true" m={1} variant="contained" size="small" onClick={clickHandler}>
                Commencer
            </Button> 
            </Box>
            </Link>
        </div>
    )
}

export default SayneteStart