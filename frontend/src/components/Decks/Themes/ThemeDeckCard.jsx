import React, { useContext } from 'react';
import classes from "../DeckCard.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";

const ThemeDeckCard = ({theme, img})  => {
    let params = useContext(DeckContext);
    //console.log (params);
    // console.log (theme);
    const lang_img = params.deck.lang_flag_icon;
    const theme_img="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1722063407/langdeck/assets/images/saynetes/Card%20Design/vecteezy_colorful-wave-abstract-gradient-background_17129866_1024.png";
    const linkHandler = (event) => {
      params.deck = {theme};
      params.theme=theme;
      params.current_deck.theme_deck=theme;

    };
  
  return (
    <div className={`${classes.card__container__white}`}>
      <Link to={{pathname:`/unit_page/${theme.language}`}} onClick={linkHandler}>
        <div className={`${classes.card__wrapper}`}>
          <div className={`${classes.card__header}`}>
            <div className={`${classes.card__title}`}>{theme.theme_name}</div>
            <div className={`${classes.card__sub__header}`}><div className={`${classes.card__subtitle}`}>{theme.theme_translation}</div></div>
          </div>
          <div className={`w-full ${classes.card__img__v2}`}>
            {/*<img src={theme.theme_illustration} alt="theme image" />*/}
            <img className="w-full" src={theme_img} />
          </div>
        </div>          
      </Link>        
    </div>
  )
}

export default ThemeDeckCard