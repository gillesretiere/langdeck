import React from 'react';
import classes from "./QuizDeck.module.css";
import QuizHome from "./QuizHome";

const QuizDeckCardHeader = ({quiz}) => {if (quiz) {
  const {quiz_name, quiz_translation, quiz_summary_translation, quiz_lesson_header, } = quiz; 

  return (
    <div className={classes.quiz_card__container}>
      <div className={classes.quiz_card__illustration}>
            <img src={quiz_lesson_header} alt="tp illustration"></img>
      </div> 
      <div className={classes.quiz_card__details}>
          <div className={`${classes.quiz_card__title} ${classes.quiz_card__title__fr}`}>
              {quiz_name}
          </div>
          <div className={`${classes.quiz_card__title} ${classes.quiz_card__title__translated}`}>
              {quiz_translation}
          </div>       
          <div className={`${classes.quiz_card__synopsis__translated}`}>
              {quiz_summary_translation}
          </div>        
          <div className={`${classes.quiz_card__go_button}`}>
          <QuizHome quiz={quiz} />
          </div>

      </div>            
    </div>           
  )
}}

export default QuizDeckCardHeader