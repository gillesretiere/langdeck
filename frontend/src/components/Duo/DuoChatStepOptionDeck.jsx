import React from 'react';
import classes from "./DuoChatDeck.module.css";


const DuoChatStepOptionDeck = ({option}) => {
  return (
    <div className={`${classes.option__wrapper}`}>
      <div className={`${classes.option}`}>
        {option.option}
      </div>
      <div className={`${classes.num_goto_step}`}>
        {option.num_goto_step}
      </div>
    </div>
  )
}

export default DuoChatStepOptionDeck