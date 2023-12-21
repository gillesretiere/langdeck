import React from 'react';
import QuizHome from "./QuizHome";

const QuizDeckList = ({deck}) => {
  return (
    <div>
       <QuizHome quiz={deck.tp_quiz[0]} />
    </div>
  )
}

export default QuizDeckList