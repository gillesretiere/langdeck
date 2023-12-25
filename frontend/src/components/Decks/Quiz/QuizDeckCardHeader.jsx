import React from 'react';
import classes from "./QuizDeck.module.css";
import QuizHome from "./QuizHome";

const QuizDeckCardHeader = ({quiz}) => {if (quiz) {
  const {tp_quiz} = quiz; 
  console.log(quiz);

  return (
    <div className={classes.quiz_card__container}>
      <div className={classes.quiz_card__illustration}>
            <img src={tp_quiz[0].quiz_lesson_header} alt="tp illustration"></img>
      </div> 
      <div className={classes.quiz_card__details}>
          <div className={`${classes.quiz_card__title} ${classes.quiz_card__title__fr}`}>
              {tp_quiz[0].quiz_name}
          </div>
          <div className={`${classes.quiz_card__title} ${classes.quiz_card__title__translated}`}>
              {tp_quiz[0].quiz_translation}
          </div>       
          <div className={`${classes.quiz_card__synopsis__translated}`}>
              {tp_quiz[0].quiz_summary_translation}
          </div>        
          <div className={`${classes.quiz_card__go_button}`}>
          <QuizHome quiz={tp_quiz[0]} />
          </div>

      </div>            
    </div>           
  )
}}

export default QuizDeckCardHeader