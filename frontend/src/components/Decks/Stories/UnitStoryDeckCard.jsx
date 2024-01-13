import React, { useContext } from 'react';
import classes from "../DeckCard.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";
import StoryDeckCardDescription from './StoryDeckCardDescription';


const UnitStoryDeckCard = ({unit_story, img}) => {
  let params = useContext(DeckContext);
  const {language, story_name, story_translation, story_illustration} = unit_story;
  // console.log (params);
  // console.log (scene);
  const linkHandler = (event) => {
    params.story = {unit_story};
    params.current_deck.story_deck = unit_story;
  };

  return (
      <div className={`${classes.card__container}`}>
        <Link to={{pathname:`/unit_story_x3_page/${language}`}} onClick={linkHandler}>
          <div className={`${classes.card__wrapper}`}>

          <div className={`${classes.card__header}`}>
            <div className={`${classes.card__title}`}>{story_name}</div>
            <div className={`${classes.card__sub__header}`}><div className={`${classes.card__subtitle}`}>{story_translation}</div></div>
          </div>

            <div className={`${classes.card__img}`}>
              <img src={story_illustration} alt="flag Icon" />
            </div>
          </div>          
        </Link>        
      </div>
  )
}

export default UnitStoryDeckCard