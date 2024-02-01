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
    
    <div className={selectedStep? classes.step__main__page_x2: classes.step__main__page}>
      <div className={classes.step__selection__page}>
        <div className={classes.step_selection__container}>
          <div className={classes.step_label}>1. Sélectionner une question avec les réponses permises</div>
          <div className={selectedStep? classes.card__list_x2: classes.card__list}>
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
        {selectedStep &&
          <>
          <div className={classes.step_selection__container}>
            <div className={classes.step_label}>2. Envoyer la question choisie et attendre la réponse</div>
            <DuoChatStepSendDeck step={selectedStep}/>
          </div>
          </>
        
        }
  
      </div>
    </div>
  )
}

export default DuoChatStepDeck