import React from 'react';
import { Link } from "react-router-dom";

import classes from "./LanguageDeckCard.module.css";

const LanguageDeckCard = ({language_deck}) => {
  const {language_uid,language_name_fr, language_name_en, language_name_native, flag_icon} = language_deck;

  return (
    <div className={`${classes.card__container}`}>
      <Link to={`/decks/${language_uid}`}>
        <div className={`${classes.card__wrapper}`}>
          <div className={`${classes.card__header}`}>
            <div className={`${classes.card__title}`}>{language_name_fr}</div>
          </div>
          <div className={`${classes.card__img}`}>
            <img src={flag_icon} alt="flag Icon"/>
          </div>
          <div className={`${classes.card__subtitle}`}>{language_name_native}</div>
        </div>
      </Link>
    </div>
  )
}

export default LanguageDeckCard