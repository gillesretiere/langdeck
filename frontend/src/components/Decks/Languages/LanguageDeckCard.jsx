import React from 'react';
import { Link } from "react-router-dom";

import classes from "./LanguageDeckCard.module.css";

const LanguageDeckCard = ({language_deck}) => {
  const {language,lang_name_fr, lang_name_en, lang_name_native, lang_flag_icon} = language_deck;

  return (
    <div className={`${classes.card__container}`}>
      <Link to={`/story_deck/${language}`}>
        <div className={`${classes.card__wrapper}`}>
          <div className={`${classes.card__header}`}>
            <div className={`${classes.card__title}`}>{lang_name_fr}</div>
          </div>
          <div className={`${classes.card__img}`}>
            <img src={lang_flag_icon} alt="flag Icon"/>
          </div>
          <div className={`${classes.card__subtitle}`}>{lang_name_native}</div>
        </div>
      </Link>
    </div>
  )
}

export default LanguageDeckCard