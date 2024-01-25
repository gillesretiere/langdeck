import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import DeckContext from "../../context/DeckContext";
import classes from "../Decks/DeckCard.module.css";

const DuoLanguageDeckCard = ({language_deck}) => {
  const {language,lang_name_fr, lang_name_en, lang_name_native, lang_flag_icon} = language_deck;
  let params = useContext(DeckContext);

  const handleClick = () => {
    params.deck=language_deck;
    params.current_deck.language_deck=language_deck;
  };

  return (
    <div className={`${classes.card__container}`}>
      <Link onClick={handleClick} to={`/duo_start_page/${language}`}>
        <div className={`${classes.card__wrapper}`}>
          <div className={`${classes.card__header}`}>
            <div className={`${classes.card__title}`}>{lang_name_fr}</div>
            <div className={`${classes.card__sub__header}`}><div className={`${classes.card__subtitle}`}>{lang_name_native}</div></div>
          </div>
          <div className={`${classes.language__card__img}`}>
            <img src={lang_flag_icon} alt="flag Icon"/>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default DuoLanguageDeckCard