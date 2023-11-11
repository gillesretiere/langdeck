import React, { useContext } from 'react';
import classes from "./SceneDeckCard.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";


const SceneDeckCard = ({scene, img}) => {
  let params = useContext(DeckContext);
  console.log(scene);

  const linkHandler = (event) => {
    params.deck = {scene};
  };

  return (
    <div className={`${classes.card__container}`}>
      <Link to={{pathname:`/scenes/${scene.language}`}} onClick={linkHandler}>
        <div className={`${classes.card__wrapper}`}>
          <div className={`${classes.card__header}`}>
            <div className={`${classes.card__title}`}>{scene.story}</div>
          </div>
          <div className={`${classes.card__img}`}>
            <img src={img} alt="flag Icon" />
          </div>
          <div className={`${classes.card__subtitle}`}>{scene.story_translation}</div>
        </div>
      </Link>
    </div>
  )
}

export default SceneDeckCard