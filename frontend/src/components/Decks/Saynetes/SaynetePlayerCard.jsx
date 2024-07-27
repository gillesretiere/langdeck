import React, { useContext } from 'react';
import classes from "../DeckCard.module.css";
import { Link } from "react-router-dom";
import MediaSimpleAudioPlayerMedTr from '../../UI/MediaPlayer/MediaSimpleAudioPlayerMedTr';
import PhraseWordsPlayer from "./Phrases/PhraseWordsPlayer";
import DeckContext from "../../../context/DeckContext";

const SaynetePlayerCard = ({deck, img}) => {

  const {phrase, phrase_translation, phrase_audio, phrase_audio_url_fr, phrase_audio_url, phrase_illustration, phrase_position, phrase_related_story, phrase_language} = deck;
  let ctx = useContext(DeckContext);

  const linkHandler = (event) => {
    ctx.story = {phrase_related_story};
    ctx.current_deck.story_deck = phrase_related_story;
    ctx.saynete = phrase_related_story;
    ctx.saynete_phrases = deck;
  };
  return (
    <>
      <div className={`h-100 mx-1 ${classes.phrase__card__container__white}`}>
        <Link to={{pathname:`/saynete_player_page/${phrase_language}`}} onClick={linkHandler} >
          <div className={`${classes.card__wrapper}`}>
            <div className={`${classes.card__header}`}>
              <div className={`${classes.card__title}`}>{phrase_related_story}</div>
              <div className={`${classes.card__sub__header}`}><div className={`${classes.card__subtitle}`}>{phrase_position}</div></div>
            </div>
            <div className={classes.image_container}>
              <div className={`h-64 mb-4 w-full ${classes.card__img}`}>
                <img src={phrase_illustration} alt="flag Icon" />
              </div>
            </div>
            <div className='inline-grid grid-cols-[50px_auto] gap-3 mx-2 mb-4'>
            {/* <!-- Two columns --> */}
                  <div className='flex items-start'><MediaSimpleAudioPlayerMedTr media_url={phrase_audio_url_fr}></MediaSimpleAudioPlayerMedTr> </div>                            
                  <div className="text-left"><PhraseWordsPlayer phrase={deck}></PhraseWordsPlayer></div>
                  <div className='flex items-start'><MediaSimpleAudioPlayerMedTr media_url={phrase_audio_url}></MediaSimpleAudioPlayerMedTr> </div>                            
                  <div className="text-left">{phrase_translation}</div>
                </div>
            </div>
        </Link>        
      </div>        
    </>
  )
}

export default SaynetePlayerCard