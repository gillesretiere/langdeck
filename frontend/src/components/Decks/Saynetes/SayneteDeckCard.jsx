import React, { useState } from 'react';
import Parser from 'html-react-parser';
import NotesIcon from '@mui/icons-material/Notes';
import CloseIcon from '@mui/icons-material/Close';
import classes from "./SayneteDeck.module.css";
import CustomAudioPlayer from '../../UI/CustomAudioPlayer';
import PhraseDeckPhraseNotesPopper from "./Phrases/PhraseDeckPhraseNotesPopper";
import PhraseDeckPhraseWords from "./Phrases/PhraseDeckPhraseWords";
import MediaSimpleAudioPlayer from '../../UI/MediaPlayer/MediaSimpleAudioPlayer';

const SayneteDeckCard = ({Phrase}) => {
    const {phrase, phrase_translation, phrase_html, phrase_audio_url_fr, phrase_audio_url, phrase_position, phrase_notes, words} = Phrase;
    console.log(phrase_notes.length);

    const [notesVisible, setNotesVisible] = useState(false);

    const handleClick = (event) => {
      setNotesVisible(!notesVisible);
    };

    return (
    <>
      <div className={classes.saynete__phrase__grid__container}>
        <div className={classes.saynete__phrase__grid__sidebar}>
          <div className={classes.saynete__phrase__grid__sidebar_item}>{phrase_position}</div>
          { phrase_notes.length > 0 ? (
            <>
            { notesVisible ? (
            <div><CloseIcon className={classes.saynete__phrase__grid__sidebar_note} onClick={handleClick}/></div>
            ):(
            <div><NotesIcon className={classes.saynete__phrase__grid__sidebar_note} onClick={handleClick}/></div>
            )}
            </>) : ( <></>)
          }
          
        </div>
        { notesVisible ? 
          (
            <div className={classes.saynete__phrase__grid__main_notes}>
                <PhraseDeckPhraseNotesPopper  phrase={Phrase} />
            </div>):
          (
            <div className={classes.saynete__phrase__grid__main}>
              <div className={classes.saynete__phrase__flex__fr}>
                <div className={classes.media__player}><MediaSimpleAudioPlayer media_url={phrase_audio_url_fr}></MediaSimpleAudioPlayer></div>
                <PhraseDeckPhraseWords phrase={Phrase}></PhraseDeckPhraseWords>
              </div>
              <div className={classes.saynete__phrase__flex__tr}>
                <span className={classes.media__player}><MediaSimpleAudioPlayer media_url={phrase_audio_url}></MediaSimpleAudioPlayer></span>
                <div>{phrase_translation}</div>
              </div>
            </div>
          )}


      </div>
    </>
  )
}



export default SayneteDeckCard