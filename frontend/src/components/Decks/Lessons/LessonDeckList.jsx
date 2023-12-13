import React, { useContext } from 'react';
import classes from "../DeckCard.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";
import LessonDeckSaynete from './LessonDeckSaynete';
import LessonDeckStudy from './LessonDeckStudy';
import LessonDeckQuiz from './LessonDeckQuiz';

const LessonDeckList = ({deck}) => {
    let ctx = useContext(DeckContext);

    // console.log(ctx);
    return (
        <>
        <div className={`${classes.card__list__container}`}>
        <div>
            <LessonDeckSaynete deck={ctx.deck}></LessonDeckSaynete>
        </div>
        <div>
            <LessonDeckStudy deck={ctx.deck}></LessonDeckStudy>
        </div>
        <div>
            <LessonDeckQuiz deck={ctx.deck}></LessonDeckQuiz>
        </div>
        </div>
        </>

    )
}

export default LessonDeckList