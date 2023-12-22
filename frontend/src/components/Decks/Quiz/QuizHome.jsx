import React,  { useState, useContext } from 'react'; 
import DeckContext from "../../../context/DeckContext";
import classes from "./QuizComponent.module.css";
import QuizComponent from './QuizComponent';
import { Link } from "react-router-dom";

const QuizHome = ({quiz}) => {
    let ctx = useContext(DeckContext);
    ctx.quiz = quiz;
    const [showQuiz, setShowQuiz] = useState(false);
    const clickHandler = () => {
        setShowQuiz (true);
    } 
    return (
        <div className={classes.quiz_container}> 
        {!showQuiz ? (
            <div>
            <Link to={{pathname:`/quiz_play_page/${ctx.language_deck.language}`}} >
            <button onClick={clickHandler}>
                J'y vais
            </button> 
            </Link>
            </div>
        ):(
            <div>
                <QuizComponent quiz={quiz}/>
            </div>
        )}
        </div>
    )
}

export default QuizHome