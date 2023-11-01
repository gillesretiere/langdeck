import React, { useState } from 'react';
import Parser from 'html-react-parser';
import { Popper } from '@mui/material';
import { usePopper } from "react-popper";

import classes from "./SayneteDeck.module.css";
import CustomAudioPlayer from '../../UI/CustomAudioPlayer';
import StyledWordPopper from '../../UI/Popper/StyledWordPopper';
import PhraseDeck from "./Phrases/PhraseDeck";


const SayneteDeckCard = ({Phrase}) => {
    const {phrase, phrase_translation, phrase_html, phrase_audio_url_fr, phrase_audio_url, words} = Phrase;
    console.log(Phrase);
    const [anchorEl, setAnchorEl] = React.useState(null);

    
    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const uid = "0";
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    var thisIsMyCopy = '<p>copy copy copy <span className="keyword__wrapper"><strong>keyword</strong></span></p>';
      var interpol = '<p>Tu veux du <span className="keyword__wrapper" {uid=9} {{uid}}="1" aria-describedby={{id}} onClick={{handleClick}}>café</span> ou du <span className="keyword__wrapper" {{uid}}="2" aria-describedby={{id}} onClick={{handleClick}}>thé</span> ?</p>';
    return (
    <section>
      <div className={classes.saynete__phrase__container}>
        <div className={classes.saynete__phrase__wrapper}>
          <div>
            <span><CustomAudioPlayer media_url={phrase_audio_url_fr}/></span>
            {/* replace Parser() by a component (phrase_html_word_id, phrase_vk_word_id, phrase_vk_tr_word_id)  */ }
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