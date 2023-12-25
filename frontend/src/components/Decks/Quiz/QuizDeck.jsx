import React, { useContext, useState} from 'react';
import classes from "./QuizDeck.module.css";
import QuizDeckCardHeader from './QuizDeckCardHeader';
import DeckContext from "../../../context/DeckContext";

const QuizDeck = ({deck}) => {
  console.log(deck);
  let ctx = useContext(DeckContext);
  return (
    <div className={classes.quiz__wrapper}>
        <div className={classes.quiz__grid}>
            <div className={classes.quiz__container}>
                {deck && <QuizDeckCardHeader quiz={deck.scene}/>}
            </div>
        </div>
    </div>
  )
}

export default QuizDeck
