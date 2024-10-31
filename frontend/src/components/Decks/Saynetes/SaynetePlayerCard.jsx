import React, { useContext, useEffect, useState, useRef, } from 'react';
import classes from "../PhraseDeckGrid.module.css";
import { BrowserRouter, Link } from "react-router-dom";
import AudioPlayer from '../../UI/MediaPlayer/AudioPlayer';
import SimpleAudioPlayer from '../../UI/MediaPlayer/SimpleAudioPlayer';
import PhraseWordsPlayer from "./Phrases/PhraseWordsPlayer";
import PhraseKeywordsPlayer from '../../UI/MediaPlayer/PhraseKeywordsPlayer';
import SaynetePlayerMonoCard from './SaynetePlayerMonoCard';
import Popper from "@mui/material/Popper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import DeckContext from "../../../context/DeckContext";

const SaynetePlayerCard = ({ deck, callbackFunction, }) => {

  const { phrase, phrase_rec_id, phrase_translation, phrase_audio, phrase_audio_url_fr, phrase_audio_url, phrase_illustration, phrase_position, phrase_related_story, phrase_related_story_rec_id, phrase_language, phrase_html_rec_id, phrase_html_kw, phrase_words_rec_id, words, } = deck;
  let ctx = useContext(DeckContext);

  const ref = useRef(null);
  // console.log(ctx);

  const [fullCard, setFullCard] = React.useState(false);
  const [flipCard, setFlipCard] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [arrowRef, setArrowRef] = useState(null);
  const [localAudioTr, setLocalAudioTr] = useState('');
  const [french, setFrench] = useState(true);
  const [wordDeck, setWordDeck] = useState([
    {
      phrase: '',
      phrase_html_rec_id: '',
      phrase_html_kw: '',
      phrase_words_rec_id: '',
      phrase_words: '',
    }
  ]);

  /*
  useEffect(() => {
    console.log(ref.current);
  }, []);
*/
  const callbackModal = () => {
    setFlipCard(!flipCard);
  }

  useEffect(() => {
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


  const languageToggler = (val) => {
    // console.log(val);
    if (val === "FR") {
      setFrench(true);
    } else {
      setFrench(false);
    }
  }

  const clickHandler = (event) => {
    setArrowRef(event.currentTarget);
    if (!anchorEl) {
      ref.current.style.position = "relative";
      // document.querySelectorAll('#card__container').forEach(element => element.style.filter = `brightness(50%)`);
      // document.querySelectorAll(`not #${phrase_rec_id}`).forEach(element => element.style.filter = `brightness(50%)`);
      ref.current.style.filter = `brightness(100%)`;
      // document.getElementById(phrase_rec_id).style.filter = `brightness(100%)`;
    } else {
      // document.querySelectorAll(`div:not(#${phrase_rec_id})`).forEach(element => element.style.filter = `brightness(1)`);
      // box.style.filter = `brightness(1)`;
      ref.current.style.filter = `brightness(98%)`;
      ref.current.style.position = "relative";
    }
    setAnchorEl(anchorEl ? null : event.currentTarget);
    callbackFunction(ref);
    return;
  };


  const flipClickHandler = (event) => {
    setFlipCard(!flipCard);
  };

  const pop = Boolean(fullCard);
  const id = pop ? "simple-popper" : undefined;


  return (
    <>
      {flipCard ?
        <SaynetePlayerMonoCard phrase={phrase} callbackModal={callbackModal}></SaynetePlayerMonoCard>
        :
        <div id='card__container'>

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
          </Popper>
          <div className={`${classes.card__container}`}>
            <div id={phrase_rec_id} ref={ref} onClick={flipClickHandler} className={`${classes.card__img}`} >
              <img src={phrase_illustration} alt="Phrase illustration" />
            </div>
            <div className={`${classes.card__description_title}`}>
              {french ? <>
                <PhraseKeywordsPlayer wordDeck={wordDeck}></PhraseKeywordsPlayer>
              </> : <div className={`text-base sm:text-base md:text-base lg:text-base xl:text-base`}>
                {phrase_translation}
              </div>}

            </div>
            <Stack direction="row" spacing={3} sx={{
              justifyContent: "space-between",
              alignItems: "flex-end",
              paddingLeft: 2,
              paddingRight: 2,
              marginTop: 3,
              marginBottom: 1,
            }}>
              <IconButton color="grey" aria-label="position" sx={{
                padding: 0,
              }}>
                <p id={phrase_rec_id} ref={ref} onClick={clickHandler}>{phrase_position}</p>
              </IconButton>
              <IconButton color="grey" aria-label="play" sx={{
                padding: 0,
              }}>
              <OpenInFullIcon id={phrase_rec_id} ref={ref} onClick={clickHandler}>
              </OpenInFullIcon>
              </IconButton>
              <IconButton color="grey" aria-label="play" sx={{
                padding: 0,
              }}>
                <SimpleAudioPlayer media_url={french ? phrase_audio_url_fr : phrase_audio_url} language={french ? 'fr' : 'tr'}></SimpleAudioPlayer>
              </IconButton>
              <Button color={french ? 'grey' : 'white'} variant='contained' size="small" aria-label="FR" onClick={() => languageToggler('FR')} sx={{
                padding: 0,
                alignItems: "flex-end",
              }}>
                <p>fre</p>
              </Button>
              <Button color={french ? 'white' : 'grey'} variant='contained' size="small" aria-label="TR" onClick={() => languageToggler('TR')} sx={{
                padding: 0,
                alignItems: "flex-end",
              }}>
                <p>{phrase_language}</p>
              </Button>
            </Stack>
            {/* https://codesandbox.io/p/sandbox/material-ui-circular-button-group-m8nyk?file=%2Fsrc%2FApp.js */}

          </div>

        </div>
      }
    </>
  )
}

export default SaynetePlayerCard