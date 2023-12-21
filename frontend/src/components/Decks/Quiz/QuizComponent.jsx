import React,  { useState } from 'react'; 
import classes from "./QuizComponent.module.css";

const QuizComponent = ({quiz}) => {
    console.log(quiz);

    const questions = quiz.quiz_form.questions;
    const qlen = questions.length;
    console.log({qlen})
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
        setActiveQuestion((prev) => prev + 1)
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
        {quiz.quiz_name}
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
        </>
    )

} 
export default QuizComponent
