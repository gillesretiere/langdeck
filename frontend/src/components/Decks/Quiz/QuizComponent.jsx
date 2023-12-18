import React from 'react'; 
import Quiz from 'react-quiz-component';
// import { quiz } from './quiz';

const QuizComponent = ({quiz}) => {

    return (
        <>
        <Quiz quiz={quiz} shuffle={true}/>
        </>
    )

} 
export default QuizComponent
