import React, { useState } from 'react';
import Parser from 'html-react-parser';

import classes from "./SayneteDeck.module.css";
import CustomAudioPlayer from '../../UI/CustomAudioPlayer';
import PhraseDeck from "./Phrases/PhraseDeck";
import PhraseDeckPhraseWords from "./Phrases/PhraseDeckPhraseWords";
import SimpleAudioPlayer from '../../UI/SimpleAudioPlayer';

const SayneteDeckCard = ({Phrase}) => {
    const {phrase, phrase_translation, phrase_html, phrase_audio_url_fr, phrase_audio_url, words} = Phrase;
    return (
    <section>
      <div className={classes.saynete__phrase__container}>
        <div className={classes.saynete__phrase__wrapper}>
          <div>
          <span><SimpleAudioPlayer media_url={phrase_audio_url_fr}></SimpleAudioPlayer></span>

            <span><CustomAudioPlayer media_url={phrase_audio_url_fr}/></span>
            {/* replace Parser() by a component (phrase_html_word_id, phrase_vk_word_id, phrase_vk_tr_word_id)  */ }
            <span className={classes.saynete__phrase}><PhraseDeckPhraseWords phrase={Phrase}></PhraseDeckPhraseWords></span>
            {/* <PhraseDeck words = {words}></PhraseDeck> */}
            <span><CustomAudioPlayer media_url={phrase_audio_url}/></span>
            <span className={classes.saynete__phrase}>{phrase_translation}</span>
          </div>
        </div>
      </div>
    </section>
  )
}



export default SayneteDeckCard