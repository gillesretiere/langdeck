import React from 'react';
import classes from "./DuoChatDeck.module.css";


const DuoChatStepOptionDeck = ({option, translate}) => {
  let translated = translate;
  return (
    <div className={`${classes.option__wrapper}`}>
      <div className={`${classes.option}`}>
          {(() => {
              if (translated === 'false'){
                  return (
                      <span>{option.option}</span>
                  )
              }
              return <span>{option.option_translation}</span>;
            })()}

      </div>
      <div className={`${classes.num_goto_step}`}>
        {option.num_goto_step}
      </div>
    </div>
  )
}

export default DuoChatStepOptionDeck