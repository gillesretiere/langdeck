import React, { useContext } from 'react';
import classes from "../DeckCard.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";

const SaynetePlayerCard = ({deck, img}) => {

  const {phrase, phrase_translation, phrase_audio, phrase_illustration, phrase_position, phrase_related_story, phrase_language} = deck;
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
            <div className='h-56 grid grid-cols-2 gap-1 place-content-stretch'>
            {/* <!-- Two columns --> */}
                <div className="text-left h-12 px-3">{phrase}</div>
                <div className="text-left h-12 px-3">{phrase_translation}</div>
            </div>
          </div>          
        </Link>        
      </div>        
    </>
  )
}

export default SaynetePlayerCard