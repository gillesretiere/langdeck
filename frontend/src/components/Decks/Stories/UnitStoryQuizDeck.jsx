import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import classes from "../DeckCard.module.css";
import DeckContext from "../../../context/DeckContext";

const UnitStoryQuizDeck = ({unit_story, lang_img}) => {
    let ctx = useContext(DeckContext);
    let {story_name, story_translation,story_lesson_header, quiz } = unit_story;
    let Quiz = quiz[0];
    ctx.quiz = Quiz;
    return (
        <>
        <div className={`${classes.card__container}`}>
            <Link to={{pathname:`/quiz_page/${ctx.current_deck.language_deck.language}`}} >
                <div className={`${classes.card__wrapper}`}>
                    <div className={`${classes.card__header}`}>
                        <div className={`${classes.card__title}`}>{Quiz.quiz_name}</div>
                        <div className={`${classes.card__title__flag}`}>
                            <div className={`${classes.card__subtitle}`}>{Quiz.quiz_translation}</div>
                            <div className={`${classes.card__language__img}` } id="flag">
                                <img src={lang_img} alt="flag Icon" />
                            </div>          
                        </div>
                    </div>
                    <div className={`${classes.card__img}`}>
                        <img src={Quiz.quiz_lesson_header} alt="flag Icon" />
                    </div>
                </div>                    
            </Link>     
        </div>  
        </>
    )
}

export default UnitStoryQuizDeck