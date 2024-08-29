import React, { useContext, useState } from 'react';
import classes from "../PhraseDeckGrid.module.css";
import { Link } from "react-router-dom";
import AudioPlayer from '../../UI/MediaPlayer/AudioPlayer';
import PhraseWordsPlayer from "./Phrases/PhraseWordsPlayer";
import Popper from "@mui/material/Popper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeckContext from "../../../context/DeckContext";

const SaynetePlayerCard = ({ deck, img }) => {

  const { phrase, phrase_translation, phrase_audio, phrase_audio_url_fr, phrase_audio_url, phrase_illustration, phrase_position, phrase_related_story, phrase_language } = deck;
  let ctx = useContext(DeckContext);

  const [fullCard, setFullCard] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [arrowRef, setArrowRef] = useState(null);


  const linkHandler = (event) => {
    ctx.story = { phrase_related_story };
    ctx.current_deck.story_deck = phrase_related_story;
    ctx.saynete = phrase_related_story;
    ctx.saynete_phrases = deck;
  };

  const clickHandler = (event) => {
    setFullCard(true);
    setArrowRef(event.currentTarget);
    setAnchorEl(anchorEl ? null : event.currentTarget);
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
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign:'left', minWidth:'14rem', maxWidth:'18rem', p:0}}>
          <div>
            <h1>Hey !</h1>
          </div>
        </Box>
      </Popper>
      <div className={`${classes.card__container}`}>
        <Link to={{ pathname: `/saynete_player_page/${phrase_language}` }} onClick={clickHandler} >
          <div className={`${classes.card__wrapper}`}>

            <div className={`${classes.card__img}`} onClick={linkHandler}>
              <img src={phrase_illustration} alt="flag Icon" />
            </div>


            <div className={`flex flex-col mb-3`}>
              <div className={`${classes.card__description_folio}`}>{phrase_position}</div>
              <div><hr></hr></div>
              <div className={`inline-grid grid-cols-[80%_1fr] gap-0.5 bg-white text-left`}>
                <div className={`${classes.card__description_title}`}><PhraseWordsPlayer phrase={deck}></PhraseWordsPlayer></div>
                <div className={`${classes.card__description_icon}`}><AudioPlayer media_url={phrase_audio_url_fr} language="fr"></AudioPlayer> </div>
              </div>

              <div className={`inline-grid grid-cols-[80%_1fr] gap-0.5 bg-white text-left`}>
                <div className={`${classes.card__description_title}`}><div className={`${classes.card__text__tr}`}>{phrase_translation}</div></div>
                <div className=''><AudioPlayer media_url={phrase_audio_url} language="tr"></AudioPlayer> </div>
              </div>
            </div>
            {/*
                <div className='inline-grid grid-cols-[250px_auto] gap-3 mx-2 mb-4'>
                    <div className={`flex items-start ${classes.card__text__fr}`}><PhraseWordsPlayer phrase={deck}></PhraseWordsPlayer></div>
                    <div className=''><AudioPlayer media_url={phrase_audio_url_fr} language="fr"></AudioPlayer> </div>                            
                    <div className={`${classes.card__text__tr}`}>{phrase_translation}</div>
                    <div className='flex items-start'><AudioPlayer media_url={phrase_audio_url} language="tr"></AudioPlayer> </div>                            
                </div>
              */}

          </div>

        </Link>

      </div>
    </>
  )
}

export default SaynetePlayerCard