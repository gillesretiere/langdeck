import React, { useContext } from 'react';
import classes from "../PhraseDeckGrid.module.css";
import { Link } from "react-router-dom";
import AudioPlayer from '../../UI/MediaPlayer/AudioPlayer';
import PhraseWordsPlayer from "./Phrases/PhraseWordsPlayer";
import DeckContext from "../../../context/DeckContext";

const SaynetePlayerCard = ({ deck, img }) => {

  const { phrase, phrase_translation, phrase_audio, phrase_audio_url_fr, phrase_audio_url, phrase_illustration, phrase_position, phrase_related_story, phrase_language } = deck;
  let ctx = useContext(DeckContext);

  const linkHandler = (event) => {
    ctx.story = { phrase_related_story };
    ctx.current_deck.story_deck = phrase_related_story;
    ctx.saynete = phrase_related_story;
    ctx.saynete_phrases = deck;
  };
  return (
    <>
      <div className={`${classes.card__container}`}>
        <Link to={{ pathname: `/saynete_player_page/${phrase_language}` }} onClick={linkHandler} >
          <div className={`${classes.card__wrapper}`}>

            <div className={`${classes.card__img}`}>
              <img src={phrase_illustration} alt="flag Icon" />
            </div>

            <div className={`flex flex-col`}>
              <div className={`inline-grid grid-cols-[80%_1fr] gap-0.5 bg-white text-left`}>
                <div className={`${classes.card__description_title}`}><PhraseWordsPlayer phrase={deck}></PhraseWordsPlayer></div>
                <div className={`${classes.card__description_icon}`}><AudioPlayer media_url={phrase_audio_url_fr} language="fr"></AudioPlayer> </div>  
              </div>
              
              <div className={`inline-grid grid-cols-[80%_1fr] gap-0.5 bg-white text-left`}>
                <div className={`${classes.card__description_title}`}><div className={`${classes.card__text__tr}`}>{phrase_translation}</div></div>
                <div className=''><AudioPlayer media_url={phrase_audio_url} language="tr"></AudioPlayer> </div>  
              </div>        
              <div><hr></hr></div>      
              <div className={`inline-grid grid-cols-[40%_2fr_1fr] gap-0.5 bg-white ${classes.card__footer}`}>
                <div className={`${classes.card__description_subtitle}`}>&nbsp;</div>
                <div className={`${classes.card__description_subtitle}`}>{phrase_related_story}</div>
                <div className={`${classes.card__description_subtitle}`}>{phrase_position}</div>
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