import React, { useState } from 'react';
import classes from "./SayneteDeckCard.module.css";

const SayneteDeckCardHeader = ({scene}) => { if (scene) {
    const {story, story_translation, story_lesson_header, story_note, story_note_translated, story_synopsis, story_synopsis_translation} = scene;

  return (
    <>
        <div className={classes.sketch__container}>
            <div className={classes.sketch__illustration}>
                <img src={story_lesson_header} alt="story illustration"></img>
            </div> 
            <div className={classes.sketch__details}>
                <div className={`${classes.sketch__title} ${classes.sketch__title__fr}`}>
                    {story}
                </div>
                <div className={`${classes.sketch__title} ${classes.sketch__title__translated}`}>
                    {story_translation}
                </div>                
                <div className={`${classes.sketch__note} ${classes.sketch__note__fr}`}>
                    {story_note}
                </div>  
                <div className={`${classes.sketch__note} ${classes.sketch__note__tr}`}>
                    {story_note_translated}
                </div>     
    
            </div>    
        </div>           
    </>

  )
}}


export default SayneteDeckCardHeader