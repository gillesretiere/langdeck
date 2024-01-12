import React,  { useState, useContext } from 'react'; 
import DeckContext from "../../../context/DeckContext";
import classes from "./SaynetePlayDeck.module.css";
import { Link } from "react-router-dom";

const SayneteStart = ({deck}) => {
    let ctx = useContext(DeckContext);
    ctx.saynete_phrases = deck;

    return (
        <div className={classes.container}> 
            <Link to={{pathname:`/saynete_play_page/${ctx.current_deck.language_deck.language}`}} >
            <button>
                J'y vais
            </button> 
            </Link>
        </div>
    )
}

export default SayneteStart