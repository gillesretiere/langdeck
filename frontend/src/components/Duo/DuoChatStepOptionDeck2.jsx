import React from 'react';
import classes from "./DuoChatDeck.module.css";


const DuoChatStepOptionDeck2 = ({option, translate,}) => {
  let translated = translate;
  return (
    <div className={`${classes.option__wrapper}`}>
      <div className={`${classes.option}`}>
          {(() => {
              if (translated === 'false'){
                  return (
                      <>
                      <span className='p2 text-xl text-white'>{option.option}</span>
                      <span className='p2 text-xl text-gray-600'>&nbsp;|&nbsp;</span>
                      <span className='p2 text-xl text-yellow-300'>{option.option_translation}</span>
                      </>
                  )
              }
              return <><span>{option.option_translation}</span><span>{option.option}</span></>;
            })()}

      </div>
      <div className={`${classes.num_goto_step}`}>
        {option.num_goto_step}
      </div>
    </div>
  )
}

export default DuoChatStepOptionDeck2