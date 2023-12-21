import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import classes from "../DeckCard.module.css";
import DeckContext from "../../../context/DeckContext";

const LessonDeckSaynete = ({deck}) => {
    let ctx = useContext(DeckContext);

    console.log(deck);
    return (
        <>
            <div>
            <Link to={{pathname:`/saynete_page/${ctx.language_deck.language}`}} >
                <div className={`${classes.card__wrapper}`}>
                    <div className={`${classes.card__header}`}>
                        <div className={`${classes.card__title}`}>{deck.scene.story}</div>
                        <div className={`${classes.card__title__flag}`}>
                            <div className={`${classes.card__subtitle}`}>{deck.scene.story_translation}</div>
                            <div className={`${classes.card__language__img}` } id="flag">
                                <img src={ctx.language_deck.lang_flag_icon} alt="flag Icon" />
                            </div>          
                        </div>
                    </div>
                    <div className={`${classes.card__img}`}>
                        <img src={deck.scene.story_lesson_header} alt="flag Icon" />
                    </div>
                </div>                    
            </Link>     
            </div>  
        </>
    )
}

export default LessonDeckSaynete