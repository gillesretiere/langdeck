import React from 'react';
import classes from "./DuoChatDeck.module.css";
import MediaTinyAudioPlayerW from '../UI/MediaPlayer/MediaTinyAudioPlayerW';


const DuoChatStepOptionDeck2 = ({option, translate,}) => {
  let translated = translate;
  return (
    <div className={`${classes.option__wrapper__tr}`}>
      <div className={`${classes.option}`}>
          {(() => {
              if (translated === 'false'){
                  return (
                      <>
                      <div className='text-left text-white'>
                        <span className={classes.media__player}>
                          <MediaTinyAudioPlayerW media_url={option.option_audio_url_fr}></MediaTinyAudioPlayerW>
                        </span>
                        {option.option}
                      </div>
                      <div className='text-left text-yellow-300'>
                        <span className={classes.media__player}>
                          <MediaTinyAudioPlayerW media_url={option.option_audio_url}></MediaTinyAudioPlayerW>
                        </span>
                        {option.option_translation}
                      </div>
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