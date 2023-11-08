import React, { useState } from 'react';
import Parser from 'html-react-parser';

import classes from "./SayneteDeck.module.css";
import CustomAudioPlayer from '../../UI/CustomAudioPlayer';
import PhraseDeck from "./Phrases/PhraseDeck";
import PhraseDeckPhraseWords from "./Phrases/PhraseDeckPhraseWords";
import MediaSimpleAudioPlayer from '../../UI/MediaPlayer/MediaSimpleAudioPlayer';

const SayneteDeckCard = ({Phrase}) => {
    const {phrase, phrase_translation, phrase_html, phrase_audio_url_fr, phrase_audio_url, words} = Phrase;
    return (
    <>
      <div className={classes.saynete__phrase__grid__container}>
        <div className={classes.saynete__phrase__grid__sidebar}>
          <span className={classes.saynete__phrase__grid__sidebar_item}>15</span>
        </div>
        <div className={classes.saynete__phrase__grid__main}>
          <div className={classes.saynete__phrase__flex__fr}>
            <div className={classes.media__player}><MediaSimpleAudioPlayer media_url={phrase_audio_url_fr}></MediaSimpleAudioPlayer></div>
            <PhraseDeckPhraseWords phrase={Phrase}></PhraseDeckPhraseWords>
          </div>
          <div className={classes.saynete__phrase__flex__fr}>
            <span className={classes.media__player}><MediaSimpleAudioPlayer media_url={phrase_audio_url}></MediaSimpleAudioPlayer></span>
            <div>{phrase_translation}</div>
          </div>
          
        </div>
      </div>
    </>
  )
}



export default SayneteDeckCard