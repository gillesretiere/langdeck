import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import classes from "../DeckCard.module.css";
import DeckContext from "../../../context/DeckContext";

const LessonDeckStudy = ({deck}) => {
    let ctx = useContext(DeckContext);
    console.log(ctx.language_deck);
    console.log(deck);
    return (
        <>
            <div>
            <Link to={{pathname:`/study_page/${ctx.language_deck.language}`}} >
                <div className={`${classes.card__wrapper}`}>
                    <div className={`${classes.card__header}`}>
                        <div className={`${classes.card__title}`}>{deck.scene.tp_name}</div>
                        <div className={`${classes.card__title__flag}`}>
                            <div className={`${classes.card__subtitle}`}>{deck.scene.tp_translation}</div>
                            <div className={`${classes.card__language__img}` } id="flag">
                                <img src={ctx.language_deck.lang_flag_icon} alt="flag Icon" />
                            </div>          
                        </div>
                    </div>
                    <div className={`${classes.card__img}`}>
                        <img src={deck.scene.tp_lesson_header} alt="flag Icon" />
                    </div>
                </div>                    
            </Link>     
            </div>  
        </>
    )
}

export default LessonDeckStudy