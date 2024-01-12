import React,  { useState, useContext } from 'react'; 
import DeckContext from "../../../context/DeckContext";
import classes from "./StudyDeck.module.css";
import StudyComponent from './StudyComponent';
import { Link } from "react-router-dom";

const StudyHome = ({deck}) => {
    let ctx = useContext(DeckContext);
    ctx.study = deck;
    return (
        <div className={classes.study_container}> 
            <Link to={{pathname:`/study_play_page/${ctx.current_deck.language_deck.language}`}} >
            <button>
                J'y vais
            </button> 
            </Link>
        </div>
    )
}

export default StudyHome