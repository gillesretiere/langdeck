import React, { useContext } from 'react';
import classes from "../DeckCard.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";


const UnitDeckCard = ({unit}) => {
    console.log(unit);
    let params = useContext(DeckContext);
    const lang_img = params.current_deck.language_deck.lang_flag_icon;
    console.log(params);
    const {lesson, lesson_translation, lesson_language, lesson_illustration, } = unit;

    const linkHandler = (event) => {
        params.unit = unit;
        params.current_deck.unit_deck = unit;
      };
        
    return (
        <div className={`${classes.card__container}`}>
        <Link to={{pathname:`/unit_story_page/${lesson_language}`}} onClick={linkHandler}>
          <div className={`${classes.card__wrapper}`}>
            <div className={`${classes.card__header}`}>
              <div className={`${classes.card__title}`}>{lesson}</div>
              <div className={`${classes.card__title__flag}`}>
                <div className={`${classes.card__subtitle}`}>{lesson_translation}</div>
                <div className={`${classes.card__language__img}` } id="flag">
                  <img src={lang_img} alt="flag Icon" />
                </div>            
              </div>
            </div>
            <div className={`${classes.card__img}`}>
              <img src={lesson_illustration} alt="flag Icon" />
            </div>
          </div>          
        </Link>        
      </div>
    )
}

export default UnitDeckCard