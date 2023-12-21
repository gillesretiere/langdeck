import React from 'react';
import classes from "./StudyDeck.module.css";

const StudyDeckCardHeader = ({study}) => {if (study) {
  const {tp_name, tp_translation, tp_lesson_header,} = study;
  console.log(study);

  return (
    <>
        <div className={classes.study_card__container}>
          <div className={classes.study_card__illustration}>
                <img src={tp_lesson_header} alt="tp illustration"></img>
            </div> 
            <div className={classes.study_card__details}>
                <div className={`${classes.study_card__title} ${classes.study_card__title__fr}`}>
                    {tp_name}
                </div>
                <div className={`${classes.study_card__title} ${classes.study_card__title__translated}`}>
                    {tp_translation}
                </div>               
            </div>   
            <div className={classes.study_card__illustration}>
                <img src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1701422568/langdeck/assets/images/pictorials/t5vale0dleo6hlmsusgz.png" alt="tp illustration"></img>
            </div>              
        </div>           
    </>

  )
}}

export default StudyDeckCardHeader