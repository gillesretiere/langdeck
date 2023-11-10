import React from 'react';
import classes from "./PhraseDeckPhraseNotesPopper.module.css";
import TranslateIcon from '@mui/icons-material/Translate';
import PhraseDeckPhraseWords from "./PhraseDeckPhraseWords";
import MediaSimpleAudioPlayer from '../../../UI/MediaPlayer/MediaSimpleAudioPlayer';



const PhraseDeckPhraseNotesPopper = ({phrase}) => {
  return (
    <>
    <div className={classes.phrase__note__container}>

      <div className={classes.phrase__note__header}>
                <div className={classes.media__player}><MediaSimpleAudioPlayer media_url={phrase.phrase_audio_url_fr}></MediaSimpleAudioPlayer></div>
        <PhraseDeckPhraseWords phrase={phrase}></PhraseDeckPhraseWords>
      </div>
      <div className={classes.phrase__note__wrapper}>
        <div className={classes.phrase__note__content}>{phrase.phrase_notes}</div>
        <div className={classes.phrase__note__content__tr}>{phrase.phrase_notes}</div>
      </div>
    </div>
    </>
  )
}

export default PhraseDeckPhraseNotesPopper