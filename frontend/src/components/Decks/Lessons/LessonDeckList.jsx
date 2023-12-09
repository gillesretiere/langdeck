import React, { useContext } from 'react';
import classes from "./LessonDeck.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";

const LessonDeckList = ({deck}) => {
    let params = useContext(DeckContext);

    console.log(params);
    return (
        <div>LessonDeck List De k {deck.story}</div>
    )
}

export default LessonDeckList