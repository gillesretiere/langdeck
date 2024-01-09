import React, { useContext, useState} from 'react';
import classes from "./StudyDeck.module.css";
import StudyDeckCardHeader from './StudyDeckCardHeader';
import StudyHome from './StudyHome';
import DeckContext from "../../../context/DeckContext";


const StudyDeck = ({deck}) => {
  console.log(deck);
  let ctx = useContext(DeckContext);
  let study = ctx.tp_aka_study;
  console.log(ctx);
  return (
    <div className={classes.study__wrapper}>
        <div className={classes.study__grid}>
            <div className={classes.study__container}>
                {deck && <StudyDeckCardHeader study={study}/>}
            </div>
            <div className={`${classes.study_card__go_button}`}>
              <StudyHome deck={study} />
            </div>
        </div>
    </div>
  )
}

export default StudyDeck
