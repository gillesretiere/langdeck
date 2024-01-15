import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import classes from "../DeckCard.module.css";
import DeckContext from "../../../context/DeckContext";

const UnitStorySayneteDeck = ({saynete, lang_img}) => {
    let ctx = useContext(DeckContext);
    let {story_name, story_translation,story_lesson_header, } = saynete;
    ctx.saynete = saynete;

    return (
        <div className={`${classes.card__container}`}>
        <Link to={{pathname:`/saynete_page/${ctx.current_deck.language_deck.language}`}} >
            <div className={`${classes.card__wrapper}`}>
                <div className={`${classes.card__header}`}>
                    <div className={`${classes.card__title}`}>{story_name}</div>
                    <div className={`${classes.card__sub__header}`}><div className={`${classes.card__subtitle}`}>{story_translation}</div></div>
                </div>
                <div className={`${classes.card__img}`}>
                    {/*<img src={story_lesson_header} alt="flag Icon" />*/}
                    <img src='https://res.cloudinary.com/dhc7ovnwk/image/upload/v1705337901/langdeck/assets/images/saynetes/langdeck-lesson-header-1.png' alt="flag Icon" />
                </div>
            </div>                    
        </Link>     
        </div>  
    )
}

export default UnitStorySayneteDeck