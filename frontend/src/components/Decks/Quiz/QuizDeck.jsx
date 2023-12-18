import React, { useContext, useState} from 'react';
import classes from "./QuizDeck.module.css";
import QuizDeckList from './QuizDeckList';
import QuizDeckCardHeader from './QuizDeckCardHeader';

const QuizDeck = ({deck}) => {
  console.log(deck);
  return (
    <div className={classes.quiz__wrapper}>
        <div className={classes.quiz__grid}>
            <div className={classes.quiz__container}>
                {deck && <QuizDeckCardHeader quiz={deck.scene}/>}
            </div>
            {deck && <QuizDeckList deck={deck.scene} />}       
        </div>
    </div>
  )
}

export default QuizDeck
