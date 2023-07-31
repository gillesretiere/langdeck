import React from 'react';
import classes from "./SketchCard.module.css";

const SketchHeader = ({scene}) => {
    const {story, story_translated, story_img, domain, language, theme} = scene;
  return (
    <>
        <div className={classes.sketch__deck__tags}>
            <span className={`${classes.sketch__deck__tag__common} ${classes.sketch__deck__tag__language}`}>{language}</span>
            <span className={`${classes.sketch__deck__tag__common} ${classes.sketch__deck__tag__domain}`}>{domain}</span>
            <span className={`${classes.sketch__deck__tag__common} ${classes.sketch__deck__tag__theme}`}>{theme}</span>
        </div>
        <div className={classes.sketch__container}>
        <div className={classes.sketch__illustration}>
            <img src={story_img} alt="https://unsplash.com/"></img>
        </div> 
        <div className={classes.sketch__details}>
            <div className={classes.sketch__title__translated}>
                {story_translated}
            </div>               
            <div className={classes.sketch__title}>
                {story}
            </div>         
        </div>    
    </div>           
    </>

  )
}

export default SketchHeader