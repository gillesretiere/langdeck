import React, { useContext, useState} from 'react';
import classes from "./StudyDeck.module.css";
import StudyDeckCardHeader from './StudyDeckCardHeader';
import StudyHome from './StudyHome';

const StudyDeck = ({deck}) => {
  // console.log(deck);
  return (
    <div className={classes.study__wrapper}>
        <div className={classes.study__grid}>
            <div className={classes.study__container}>
                {deck && <StudyDeckCardHeader study={deck.scene}/>}
            </div>
            <div className={`${classes.study_card__go_button}`}>
              <StudyHome deck={deck} />
            </div>
        </div>
    </div>
  )
}

export default StudyDeck
