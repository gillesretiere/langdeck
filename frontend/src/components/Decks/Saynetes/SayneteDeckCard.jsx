import React from 'react';
import classes from "./SayneteDeck.module.css";
import CustomAudioPlayer from '../../UI/CustomAudioPlayer';

const SayneteDeckCard = ({Phrase}) => {
    const {phrase, translation, audio_public_url_fr, audio_public_url} = Phrase;
  return (
    <section>
      <div className={classes.sketch__item__container}>
        <div className={classes.sketch__item__wrapper}>
          <div className={classes.sketch__item__text}>
            <span><CustomAudioPlayer media_url={audio_public_url_fr}/></span>
            <span className={classes.sketch__item__text__fr}>{phrase}</span>
            <span><CustomAudioPlayer media_url={audio_public_url}/></span>
            <span className={classes.sketch__item__text__tr}>{translation}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SayneteDeckCard