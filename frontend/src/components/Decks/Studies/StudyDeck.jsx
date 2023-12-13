import React, { useContext, useState} from 'react';
import classes from "./StudyDeck.module.css";
import StudyDeckList from './StudyDeckList';
import StudyDeckCardHeader from './StudyDeckCardHeader';
import StudyDeckCardSynopsis from "./StudyDeckCardSynopsis";

const StudyDeck = ({deck}) => {
  // console.log(deck);
  return (
    <div className={classes.study__wrapper}>
        <div className={classes.study__grid}>
            <div className={classes.study__container}>
                {deck && <StudyDeckCardHeader study={deck.scene}/>}
                <StudyDeckCardSynopsis study={deck.scene}/>                
            </div>
            {deck && <StudyDeckList study={deck.scene} />}       
        </div>
    </div>
  )
}

export default StudyDeck
