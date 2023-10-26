import React from 'react';
import classes from "./SayneteDeck.module.css";
import CustomAudioPlayer from '../../UI/CustomAudioPlayer';

const SayneteDeckCard = ({Phrase}) => {
    const {phrase, phrase_translation, phrase_audio_url_fr, phrase_audio_url} = Phrase;
    console.log(phrase);
  return (
    <section>
      <div className={classes.sketch__item__container}>
        <div className={classes.sketch__item__wrapper}>
          <div className={classes.sketch__item__text}>
            <span><CustomAudioPlayer media_url={phrase_audio_url_fr}/></span>
            <span className={classes.sketch__item__text__fr}>{phrase}</span>
            <span><CustomAudioPlayer media_url={phrase_audio_url}/></span>
            <span className={classes.sketch__item__text__tr}>{phrase_translation}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SayneteDeckCard