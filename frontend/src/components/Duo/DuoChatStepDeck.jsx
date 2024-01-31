import React, { useContext, useState, useRef, useEffect, } from 'react';
import DuoChatStepDeckCard from './DuoChatStepDeckCard';
import DuoChatStepSendDeck from './DuoChatStepSendDeck';
import classes from "./DuoChatStepDeck.module.css";

const DuoChatStepDeck = ({steps}) => {
  const [selectedStep, setSelectedStep] = useState('');

  const setStep = (cardStep) => {
    setSelectedStep (cardStep);
  }

  return (
    <div className={classes.step__main__page}>
      <div className={classes.step__selection__page}>
        <div className={classes.step_selection__container}>
          <div className={classes.step_label}>1. Sélectionner une question avec les choix de réponse attendue</div>
          <div className={`${classes.card__list}`}>
              {steps && steps.map(
                  (el) => {
                      return (<DuoChatStepDeckCard key={el.step_rec_id} step={el} onSetStep={setStep}/>)
                  }
              )
              }
          </div>
        </div>
      </div>
      <div className={classes.step__chat__page}>
      <div className={classes.step_selection__container}>
      <div className={classes.step_label}>2. Envoyer la question et les options de réponses dans la langue cible</div>

                <DuoChatStepSendDeck step={selectedStep}/>
            </div>  
      </div>
    </div>
  )
}

export default DuoChatStepDeck