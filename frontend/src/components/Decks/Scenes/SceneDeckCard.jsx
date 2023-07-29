import React, { useContext } from 'react';
import classes from "./SceneDeckCard.module.css";
import PhraseCardIterator from "./Phrases/PhraseCardIterator";
import { Link } from "react-router-dom";
import { appContext } from "../../../App";


const SceneDeckCard = ({scene}) => {
  let selectedScene = useContext(appContext);
  selectedScene = {scene};

  return (
    <div className={`${classes.card__container}`}>
      <Link to={{pathname:`/scenes/${scene.language}`}}>
        <div className={`${classes.card__wrapper}`}>
          <div className={`${classes.card__header}`}>
            <div className={`${classes.card__title}`}>{scene.story}</div>
          </div>
          <div className={`${classes.card__img}`}>
            <img src={scene.story_img} alt="flag Icon" />
          </div>
          <div className={`${classes.card__subtitle}`}>{scene.story_translated}</div>
        </div>
      </Link>
    </div>
  )
}

export default SceneDeckCard