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
        <Link to={{pathname:`/saynete_page/${ctx.language_deck.language}`}} >
            <div className={`${classes.card__wrapper}`}>
                <div className={`${classes.card__header}`}>
                    <div className={`${classes.card__title}`}>{story_name}</div>
                    <div className={`${classes.card__title__flag}`}>
                        <div className={`${classes.card__subtitle}`}>{story_translation}</div>
                        <div className={`${classes.card__language__img}` } id="flag">
                            <img src={lang_img} alt="flag Icon" />
                        </div>          
                    </div>
                </div>
                <div className={`${classes.card__img}`}>
                    <img src={story_lesson_header} alt="flag Icon" />
                </div>
            </div>                    
        </Link>     
        </div>  
    )
}

export default UnitStorySayneteDeck