import React, { useContext } from 'react';
import classes from "./StoryDeckCard.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";


const StoryDeckCard = ({scene, img}) => {
  let params = useContext(DeckContext);

  const linkHandler = (event) => {
    params.deck = {scene};
  };

  return (
    <div className={`${classes.card__container}`}>
      <Link to={{pathname:`/saynete_page/${scene.language}`}} onClick={linkHandler}>
        <div className={`${classes.card__wrapper}`}>
          <div className={`${classes.card__header}`}>
            <div className={`${classes.card__title}`}>{scene.story}</div>
            <div className={`${classes.card__title__flag}`}>
            <div className={`${classes.card__subtitle}`}>{scene.story_translation}</div>
            <div className={`${classes.card__language__img}` } id="flag">
              <img src={img} alt="flag Icon" />
            </div>            
            </div>
          </div>
          <div className={`${classes.card__img}`}>
            <img src={scene.story_illustration} alt="flag Icon" />
          </div>
          <div className={`${classes.card__desc}`}>
            <div>{scene.story_desc}</div>
          </div>          
          <hr></hr>
          <div className={`${classes.card__desc}`}>
            <div>{scene.story_desc_translation}</div>
          </div>             
        </div>          

      </Link>
    </div>
  )
}

export default StoryDeckCard