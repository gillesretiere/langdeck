import React, { useContext } from 'react';
import classes from "../DeckCard.module.css";
import { Link } from "react-router-dom";
import AudioPlayer from '../../UI/MediaPlayer/AudioPlayer';
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

            <div className={classes.image_container}>
              <div className={`h-64 sm:h-80 md:h-80 lg:h-80 xl:h-80 2xl:h-96 mb-4 w-full ${classes.card__img}`}>
                <img src={phrase_illustration} alt="flag Icon" />
              </div>
            </div>
            <div className='inline-grid grid-cols-[50px_auto] gap-3 mx-2 mb-4'>
            {/* <!-- Two columns --> */}
                  <div className='flex items-start'><AudioPlayer media_url={phrase_audio_url_fr} language="fr"></AudioPlayer> </div>                            
                  <div className="text-left text-md font-semibold tracking-wide leading-normal pr-4"><PhraseWordsPlayer phrase={deck}></PhraseWordsPlayer></div>
                  <div className='flex items-start'><AudioPlayer media_url={phrase_audio_url} language="tr"></AudioPlayer> </div>                            
                  <div className="text-left text-blue-600 font-semibold text-md tracking-wide leading-normal pr-4">{phrase_translation}</div>
                </div>
            </div>
        </Link>        
      </div>        
    </>
  )
}

export default SaynetePlayerCard