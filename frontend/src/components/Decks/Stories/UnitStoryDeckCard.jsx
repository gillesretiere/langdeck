import React, { useContext } from 'react';
import classes from "../StoryDeckGrid.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";
import StoryDeckCardDescription from './StoryDeckCardDescription';
import IconButton from "@mui/material/IconButton";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";


const UnitStoryDeckCard = ({ unit_story, img }) => {
  let ctx = useContext(DeckContext);
  const { language, story_name, story_translation, story_illustration, story_desc, story_desc_translation, story_synopsis, story_synopsis_translation, story_language, story_translation_id, } = unit_story;
  // console.log (params);
  // console.log (scene);
  const linkHandler = (event) => {
    ctx.story = { unit_story };
    ctx.current_deck.story_deck = unit_story;
    ctx.saynete = unit_story;
    ctx.saynete_phrases = unit_story.phrases;
  };
  return (
    <div className={`h-100 mx-1 ${classes.card__container}`}>
      <Link to={{ pathname: `/saynete_player_page/${story_translation_id}` }} onClick={linkHandler} >
        <div className={`${classes.card__wrapper}`}>
          <div className={`${classes.card__header}`}>
            <div className={`${classes.card__title}`}>{story_name}</div>
            <div className={`${classes.card__subtitle}`}>{story_translation}</div>
          </div>
          <div className={`${classes.card__img}`}>
            <img src={story_illustration} alt="flag Icon" />
          </div>
          <div className={`flex flex-col`}>
            <div className={`inline-grid grid-cols-[30%_4fr] gap-0.5 bg-white text-left`}>
              <div>&nbsp;</div>
              <div>
                <div className={`${classes.card__description_title}`}>{story_desc}</div>
                <div className={`${classes.card__description_title}`}>{story_desc_translation}</div>
              </div>
            </div>
            <div className={`inline-grid grid-cols-[30%_2fr_2fr] gap-0.5 bg-white ${classes.card__footer}`}>
              <div className={`${classes.card__description_subtitle}`}>&nbsp;</div>
              <div className={`${classes.card__description_subtitle}`}>{story_synopsis}</div>
              <div className={`${classes.card__description_subtitle}`}>{story_synopsis_translation}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default UnitStoryDeckCard