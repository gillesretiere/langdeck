import React, { useContext } from 'react';
import classes from "./ThemeDeckCard.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";

const ThemeDeckCard = ({theme, img})  => {
    let params = useContext(DeckContext);
    //console.log (params);
    // console.log (theme);
    const lang_img = params.deck.lang_flag_icon;
    const linkHandler = (event) => {
      params.deck = {theme};
    };
  
  return (
    <div className={`${classes.card__container}`}>
      <Link to={{pathname:`/unit_page/${theme.language}`}} onClick={linkHandler}>
        <div className={`${classes.card__wrapper}`}>
          <div className={`${classes.card__header}`}>
            <div className={`${classes.card__title}`}>{theme.theme_name}</div>
            <div className={`${classes.card__title__flag}`}>
              <div className={`${classes.card__subtitle}`}>{theme.theme_translation}</div>
              <div className={`${classes.card__language__img}` } id="flag">
                <img src={lang_img} alt="flag Icon" />
              </div>            
            </div>
          </div>
          <div className={`${classes.card__img}`}>
            <img src={theme.theme_illustration} alt="flag Icon" />
          </div>
        </div>          
      </Link>        
    </div>
  )
}

export default ThemeDeckCard