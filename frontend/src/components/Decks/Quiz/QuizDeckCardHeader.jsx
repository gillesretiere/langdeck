import React from 'react';
import classes from "./QuizDeck.module.css";

const QuizDeckCardHeader = ({quiz}) => {if (quiz) {
  const {tp_name, tp_translation, tp_illustration,} = quiz;
  console.log(quiz);

  return (
    <>
        <div className={classes.quiz_card__container}>
          <div className={classes.quiz_card__illustration}>
                <img src={tp_illustration} alt="tp illustration"></img>
            </div> 
            <div className={classes.quiz_card__details}>
                <div className={`${classes.quiz_card__title} ${classes.quiz_card__title__fr}`}>
                    {tp_name}
                </div>
                <div className={`${classes.quiz_card__title} ${classes.quiz_card__title__translated}`}>
                    {tp_translation}
                </div>               
            </div>            
        </div>           
    </>

  )
}}

export default QuizDeckCardHeader