import React, { useContext } from 'react';
import classes from "../DeckCard.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";
import StoryDeckCardDescription from './StoryDeckCardDescription';
import IconButton from "@mui/material/IconButton";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";


const UnitStoryDeckCard = ({unit_story, img}) => {
  let ctx = useContext(DeckContext);
  const {language, story_name, story_translation, story_illustration} = unit_story;
  // console.log (params);
  // console.log (scene);
  const linkHandler = (event) => {
    ctx.story = {unit_story};
    ctx.current_deck.story_deck = unit_story;
    ctx.saynete = unit_story;
    ctx.saynete_phrases = unit_story.phrases;
  };

  return (
      <div className={`h-100 mx-1 ${classes.card__container__white}`}>
        <Link to={{pathname:`/saynete_player_page/${language}`}} onClick={linkHandler} >
          <div className={`${classes.card__wrapper}`}>
            <div className={`${classes.card__header}`}>
              <div className={`${classes.card__title}`}>{story_name}</div>
              <div className={`${classes.card__sub__header}`}><div className={`${classes.card__subtitle}`}>{story_translation}</div></div>
            </div>
            <div className={classes.image_container}>
              <div className={`h-64 mb-4 w-full ${classes.card__img}`}>
                <img src={story_illustration} alt="flag Icon" />
              </div>
            </div>

          </div>          
        </Link>        
      </div>
  )
}

export default UnitStoryDeckCard