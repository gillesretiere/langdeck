import React,  { useState } from 'react'; 

import classes from "./QuizComponent.module.css";
import QuizComponent from './QuizComponent';

const QuizHome = ({quiz}) => {
    const [showQuiz, setShowQuiz] = useState(false);
    const clickHandler = () => {
        setShowQuiz (true);
    } 
    return (
        <div className={classes.quiz_container}> 
        {!showQuiz ? (
            <div>
            <button onClick={clickHandler}>
                J'y vais
            </button> 
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