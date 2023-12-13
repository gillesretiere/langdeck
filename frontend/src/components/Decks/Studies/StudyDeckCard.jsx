import React, { useState } from 'react';
import classes from "./StudyDeck.module.css";
import MediaSimpleAudioPlayer from '../../UI/MediaPlayer/MediaSimpleAudioPlayer';
import StudyDeckPhraseWords from "./Phrases/StudyDeckPhraseWords";

const StudyDeckCard = ({Tp}) => {
  const {tp_phrase_order, tp_phrase, tp_phrase_translation, tp_phrase_html, tp_phrase_audio_url, tp_phrase_audio_url_fr, words, } = Tp;
  const tp_notes = "";
  const [notesVisible, setNotesVisible] = useState(false);

  const handleClick = (event) => {
    setNotesVisible(!notesVisible);
  };

  return (
    <div className={classes.study__phrase__grid__container}>
      <div className={classes.study__phrase__grid__sidebar}>
        <div className={classes.study__phrase__grid__sidebar_item}>{tp_phrase_order}</div>
      </div>
      { tp_notes ? 
        (
          <div className={classes.study__phrase__grid__main_notes}>
              Notes
          </div>):
        (
          <div className={classes.study__phrase__grid__main}>
            <div className={classes.study__phrase__flex__fr}>
              <div className={classes.media__player}><MediaSimpleAudioPlayer media_url={tp_phrase_audio_url_fr}></MediaSimpleAudioPlayer></div>
              <StudyDeckPhraseWords tp_phrase_and_words={Tp}></StudyDeckPhraseWords>
            </div>
            <div className={classes.study__phrase__flex__tr}>
              <span className={classes.media__player}><MediaSimpleAudioPlayer media_url={tp_phrase_audio_url}></MediaSimpleAudioPlayer></span>
              <div>{tp_phrase_translation}</div>
            </div>
          </div>
        )}


    </div>
  )
}

export default StudyDeckCard