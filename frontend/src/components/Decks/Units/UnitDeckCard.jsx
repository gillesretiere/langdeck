import React, { useContext } from 'react';
import classes from "../DeckCard.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";


const UnitDeckCard = ({unit}) => {

    let params = useContext(DeckContext);
    const lang_img = params.current_deck.language_deck.lang_flag_icon;
    const theme_img="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1722065642/langdeck/assets/images/saynetes/Card%20Design/bg-card-blue.png";

    const {lesson, lesson_translation, lesson_language, lesson_illustration, } = unit;
    const linkHandler = (event) => {
        params.unit = unit;
        params.current_deck.unit_deck = unit;
      };
        
    return (
        <div className={`${classes.card__container__white}`}>
        <Link to={{pathname:`/unit_story_page/${lesson_language}`}} onClick={linkHandler}>
          <div className={`${classes.card__wrapper}`}>

          <div className={`${classes.card__header}`}>
            <div className={`${classes.card__title}`}>{lesson}</div>
            <div className={`${classes.card__sub__header}`}><div className={`${classes.card__subtitle}`}>{lesson_translation}</div></div>
          </div>
            <div className={`${classes.card__img__v2}`}>
                          {/*<img src={lesson_illustration} alt="flag Icon" />*/}
              <img className="w-full" src={theme_img} />    
            </div>
          </div>          
        </Link>        
      </div>
    )
}

export default UnitDeckCard