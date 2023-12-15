import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import classes from "../DeckCard.module.css";
import DeckContext from "../../../context/DeckContext";

const LessonDeckQuiz = ({deck}) => {
    let ctx = useContext(DeckContext);
    console.log(ctx.language_deck);
    console.log(deck);
    return (
        <>
            <div>
            <Link to={{pathname:`/quiz_page/${ctx.language_deck.language}`}} >
                <div className={`${classes.card__wrapper}`}>
                    <div className={`${classes.card__header}`}>
                        <div className={`${classes.card__title}`}>Evaluation</div>
                        <div className={`${classes.card__title__flag}`}>
                            <div className={`${classes.card__subtitle}`}>Quiz</div>
                            <div className={`${classes.card__language__img}` } id="flag">
                                <img src={ctx.language_deck.lang_flag_icon} alt="flag Icon" />
                            </div>          
                        </div>
                    </div>
                    <div className={`${classes.card__img}`}>
                        <img src='https://res.cloudinary.com/dhc7ovnwk/image/upload/v1702561866/langdeck/assets/images/saynetes/testbleu.png' alt="flag Icon" />
                    </div>
                </div>                    
            </Link>     
            </div>  
        </>
    )
}

export default LessonDeckQuiz