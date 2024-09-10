import React, { useContext, useEffect, useState } from 'react';
import classes from "../PhraseDeckGrid.module.css";
import { Link } from "react-router-dom";
import AudioPlayer from '../../UI/MediaPlayer/AudioPlayer';
import SimpleAudioPlayer from '../../UI/MediaPlayer/SimpleAudioPlayer';
import PhraseWordsPlayer from "./Phrases/PhraseWordsPlayer";
import PhraseKeywordsPlayer from '../../UI/MediaPlayer/PhraseKeywordsPlayer';
import Popper from "@mui/material/Popper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeckContext from "../../../context/DeckContext";

const SaynetePlayerCard = ({ deck, img }) => {

  const { phrase, phrase_translation, phrase_audio, phrase_audio_url_fr, phrase_audio_url, phrase_illustration, phrase_position, phrase_related_story, phrase_related_story_rec_id, phrase_language, phrase_html_rec_id, phrase_html_kw, phrase_words_rec_id, words, } = deck;
  let ctx = useContext(DeckContext);

  const [fullCard, setFullCard] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [arrowRef, setArrowRef] = useState(null);
  const [localAudioTr, setLocalAudioTr] = useState('');
  const [wordDeck, setWordDeck] = useState([
    {
      phrase: '',
      phrase_html_rec_id: '',
      phrase_html_kw: '',
      phrase_words_rec_id: '',
      phrase_words: '',
    }
  ]);

  useEffect(() => {
    setFullCard(false);
    const vkUrl = phrase_audio.split('/');
    const localUrl = '../../../assets/audio/' + phrase_related_story_rec_id + '/' + phrase_language + '/' + vkUrl.pop();
    setLocalAudioTr(localUrl);
    const updateWordDeck = [
      {
        phrase: phrase,
        phrase_html_rec_id: phrase_html_rec_id,
        phrase_html_kw: phrase_html_kw,
        phrase_words_rec_id: phrase_words_rec_id,
        phrase_words: words,

      }
    ];
    setWordDeck(updateWordDeck);

  }, [deck]);

  const linkHandler = (event) => {
    ctx.story = { phrase_related_story };
    ctx.current_deck.story_deck = phrase_related_story;
    ctx.saynete = phrase_related_story;
    ctx.saynete_phrases = deck;
  };

  const clickHandler = (event) => {
    setFullCard(!fullCard);
    setArrowRef(event.currentTarget);
    setAnchorEl(anchorEl ? null : event.currentTarget);
    console.log(fullCard);
    return;
  };


  const pop = Boolean(fullCard);
  const id = pop ? "simple-popper" : undefined;


  return (
    <>
      <Popper id={id}
        open={pop}
        anchorEl={anchorEl}
        placement="bottom"
        disablePortal={false}
        modifiers={[
          {
            name: 'arrow',
            enabled: true,
            options: {
              element: arrowRef,
            }
          }
        ]}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', minWidth: '14rem', maxWidth: '18rem', p: 0 }}>
          <div>
            <h1>Hey !</h1>
          </div>
        </Box>
      </Popper>
      <div className={`${classes.card__container}`}>
        <div className={`${classes.card__wrapper}`}>
          <div className={`${classes.card__img}`} onClick={clickHandler}>
            <img src={phrase_illustration} alt="Phrase illustration" />
          </div>
          <div className={`flex flex-col mb-3`}>
            <div className={`text-black ${classes.card__description_folio}`}>{phrase_position}</div>
            <div><hr></hr></div>
            <div className={`inline-grid grid-cols-[80%_1fr] gap-0.5 bg-white text-left`}>
              <div className={`${classes.card__description_title}`}><PhraseKeywordsPlayer wordDeck={wordDeck}></PhraseKeywordsPlayer></div>
              <div className={`${classes.card__description_icon}`}><SimpleAudioPlayer media_url={phrase_audio_url_fr} language="fr"></SimpleAudioPlayer> </div>
            </div>
            <div className={`inline-grid grid-cols-[80%_1fr] gap-0.5 bg-white text-left`}>
              <div className={`text-secondary-contrastText ${classes.card__description_title}`}><div className={`${classes.card__text__tr}`}>{phrase_translation}</div></div>
              <div className=''><SimpleAudioPlayer media_url={phrase_audio_url} language="tr"></SimpleAudioPlayer> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SaynetePlayerCard