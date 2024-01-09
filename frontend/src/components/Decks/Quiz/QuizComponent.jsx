import React,  { useState, useContext } from 'react'; 
import classes from "./QuizComponent.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";

const QuizComponent = ({quiz}) => {
    console.log(quiz);
    let ctx = useContext(DeckContext);

    const questions = quiz.quiz_form_translation.questions;
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [result, setResult] = useState({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });

    const onClickNext = () => {
        setSelectedAnswerIndex(null)
        setResult((prev) =>
            selectedAnswer
            ? {
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1,
                }
            : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        )        
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            setActiveQuestion(0)
            setShowResult(true)
        }        
      }
    const onAnswerSelected = (index) => {
        setSelectedAnswerIndex(index)
        if (index.toString() === correctAnswer) {
            setSelectedAnswer(true)
            console.log('right')
        } else {
            setSelectedAnswer(false)
            console.log('wrong')
        }
    }
    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

    const { question, answers, correctAnswer, } = questions[activeQuestion]

    return (
        <>
        {!showResult ? (
            <div className={classes.quiz_container}>
                <div>
                    <span className={classes.active_question_no}>{addLeadingZero(activeQuestion + 1)}</span>
                    <span className={classes.total_question}>/{addLeadingZero(questions.length)}</span>
                </div>            
                <h2>{question}</h2>
                <ul>
                    {answers.map((answer, index) => (
                    <li 
                        onClick={() => onAnswerSelected(index+1)} 
                        key={answer}
                        className={selectedAnswerIndex === index+1 ? classes.selected_answer : null}>
                    {answer}
                    </li>
                    ))}
                </ul>      
                <div className={classes.flex_right}>
                    <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                        {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                    </button>
                </div>
            </div> 
        ):(
            <div className={classes.result}>
                <h3>Result</h3>
                <p>
                Total Question: <span>{questions.length}</span>
                </p>
                <p>
                Total Score:<span> {result.score}</span>
                </p>
                <p>
                Correct Answers:<span> {result.correctAnswers}</span>
                </p>
                <p>
                Wrong Answers:<span> {result.wrongAnswers}</span>
                </p>
                <Link to={{pathname:`/unit_story_x3_page/${ctx.language_deck.language}`}} >
                    <div className={classes.quiz_container}>
                        <button >
                            OK
                        </button>     
                    </div>           
                </Link>
            </div>
        )}
        </>
    )

} 
export default QuizComponent
