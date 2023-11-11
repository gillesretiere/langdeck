import React from 'react';
import classes from "./PhraseDeckPhraseNotesPopper.module.css";
import TranslateIcon from '@mui/icons-material/Translate';
import PhraseDeckPhraseWords from "./PhraseDeckPhraseWords";
import MediaSimpleAudioPlayer from '../../../UI/MediaPlayer/MediaSimpleAudioPlayer';



const PhraseDeckPhraseNotesPopper = ({phrase}) => {

  const isNotes2 = phrase.phrase_notes_2_translation.length;
  return (
    <>
    <div className={classes.phrase__note__container}>

      <div className={classes.phrase__note__header}>
        <div className={classes.media__player}><MediaSimpleAudioPlayer media_url={phrase.phrase_audio_url_fr}></MediaSimpleAudioPlayer></div>
        <PhraseDeckPhraseWords phrase={phrase}></PhraseDeckPhraseWords>
      </div>
      <div className={classes.phrase__note__wrapper}>
        <div className={classes.phrase__note__content}>
          <span className={classes.phrase__note__number}>1.</span>
          {phrase.phrase_notes_translation}
        </div>
        {isNotes2 > 0 ? (
          <div className={classes.phrase__note__content__tr}>
            <span className={classes.phrase__note__number}>2.</span>
            {phrase.phrase_notes_2_translation}
        </div>
        ):(<div className={classes.phrase__note__content__tr}>&nbsp;</div>)
        }

      </div>
    </div>
    </>
  )
}

export default PhraseDeckPhraseNotesPopper