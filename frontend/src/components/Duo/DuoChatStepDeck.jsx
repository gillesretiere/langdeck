import React from 'react';
import DuoChatStepDeckCard from './DuoChatStepDeckCard';
import classes from "./DuoChatDeck.module.css";

const DuoChatStepDeck = ({steps}) => {
  return (
    <div className={`${classes.card__list}`}>
        {steps && steps.map(
            (el) => {
                return (<DuoChatStepDeckCard key={el.step_rec_id} step={el} />)
            }
        )
        }
    </div>
  )
}

export default DuoChatStepDeck