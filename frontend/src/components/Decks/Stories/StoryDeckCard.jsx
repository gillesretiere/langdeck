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
            <div className={`${classes.card__title}`}>{scene.story_translation}</div>
          </div>
          <div className={`${classes.card__img}`}>
            <img src={img} alt="flag Icon" />
          </div>
          <div className={`${classes.card__subtitle}`}>{scene.story}</div>
        </div>
      </Link>
    </div>
  )
}

export default StoryDeckCard