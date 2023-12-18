import React from 'react';
import QuizComponent from "./QuizComponent";

const QuizDeckList = ({deck}) => {
  console.log(deck);
  const deck_quiz = deck.tp_quiz[0].quiz_form_translation;
  console.log(deck_quiz);
  return (
    <div>
      {deck.tp_quiz[0].quiz_translation}
      <div>
       {/*<QuizComponent quiz={deck_quiz}/>*/}
      </div>
    </div>
  )
}

export default QuizDeckList