import React from 'react';
import Parser from 'html-react-parser';
import classes from "./SayneteDeck.module.css";
import CustomAudioPlayer from '../../UI/CustomAudioPlayer';
import PhraseDeck from "./Phrases/PhraseDeck";


const SayneteDeckCard = ({Phrase}) => {
    const {phrase, phrase_translation, phrase_html, phrase_audio_url_fr, phrase_audio_url, words} = Phrase;
    console.log(Phrase);
    var thisIsMyCopy = '<p>copy copy copy <strong>strong copy</strong></p>';
  return (
    <section>
      <div className={classes.saynete__phrase__container}>
        <div className={classes.saynete__phrase__wrapper}>
          <div>
            <span><CustomAudioPlayer media_url={phrase_audio_url_fr}/></span>
            <span className={classes.sketch__item__text__fr}>{Parser(thisIsMyCopy)}</span>
            <span className={classes.sketch__item__text__fr}>{Parser(phrase_html)}</span>
            <PhraseDeck words = {words}></PhraseDeck>
            <span><CustomAudioPlayer media_url={phrase_audio_url}/></span>
            <span className={classes.sketch__item__text__tr}>{phrase_translation}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SayneteDeckCard