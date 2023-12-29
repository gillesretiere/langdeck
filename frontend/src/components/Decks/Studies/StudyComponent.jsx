import React from 'react';
import classes from "./StudyDeckComponent.module.css";

const StudyComponent = () => {
  return (
    <div>StudyComponent
      <div className={classes.study_card__illustration}>
          <img src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1701422568/langdeck/assets/images/pictorials/t5vale0dleo6hlmsusgz.png" alt="tp illustration"></img>
      </div>  
    </div>
  )
}

export default StudyComponent