import React, { useContext } from 'react';
import classes from "./LessonDeck.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";


const LessonDeckCard = ({deck}) => {
  let params = useContext(DeckContext);

    console.log(params);
  return (
    <div>LessonDeckCard Page</div>
  )
}

export default LessonDeckCard