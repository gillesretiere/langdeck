import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";
import classes from "../LanguageDeckGrid.module.css";

const LanguageDeckCard = ({language_deck}) => {
  const {language,lang_name_fr, lang_name_en, lang_name_native, lang_flag_icon} = language_deck;
  let params = useContext(DeckContext);

  const handleClick = () => {
    params.deck=language_deck;
    params.current_deck.language_deck=language_deck;
  };

  return (
    <div className={`${classes.card__container}`}>
      <Link onClick={handleClick} to={`/theme_page/${language}`}>
        <div className={`${classes.card__wrapper}`}>
          <div className={`${classes.card__header}`}>
            <div className={`${classes.card__title}`}>{lang_name_fr}</div>
            <div className={`${classes.card__subtitle}`}>{lang_name_native}</div>
          </div>
          <div className={`${classes.card__img}`}>
            <img src={lang_flag_icon} alt="flag Icon"/>
          </div>
          <div className={`flex flex-col`}>
            <div className={`inline-grid grid-cols-[40%_3fr] gap-0.5 bg-white text-left`}>
              <div>&nbsp;</div>
              <div className={`${classes.card__description_title}`}>Si vous êtes arabophone et ne savez pas comment vous adresser à votre entourage en français, sélectionnez cette carte.</div>
            </div>
            <div className={`inline-grid grid-cols-[40%_1fr_2fr] gap-0.5 bg-white ${classes.card__footer}`}>
              <div className={`${classes.card__description_subtitle}`}>&nbsp;</div>
              <div className={`${classes.card__description_subtitle}`}>Select this card if you are an Arabic speaker.</div>
              <div className={`${classes.card__description_subtitle}`}>إذا كنت من المتحدثين باللغة العربية ولا تعرف كيفية مخاطبة من حولك باللغة الفرنسية، فاختر هذه البطاقة.</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default LanguageDeckCard