import React, { useState } from 'react';
import classes from "./SayneteDeckCard.module.css";

const SayneteDeckCardHeader = ({scene}) => { if (scene) {
    const {story_name, story_translation, story_lesson_header, story_note, story_note_translated, story_synopsis, story_synopsis_translation} = scene;
    console.log(scene);
  return (
    <>
        <div className={classes.sketch__container}>
            {/*
            <div className={classes.sketch__illustration}>
                <img src={story_lesson_header} alt="story illustration"></img>
            </div> 
            */}
            <div className={classes.sketch__details}>
                <div className={`${classes.sketch__title}`}>
                    {story_name}
                </div>
                <div className={`${classes.sketch__title} ${classes.sketch__title__translated}`}>
                    {story_translation}
                </div>                
                <div className={`${classes.sketch__note}`}>
                    {story_note}
                </div>  
                <div className={`${classes.sketch__note} ${classes.sketch__note__tr}`}>
                    {story_note_translated}
                </div>     
                <div className={`${classes.sketch__note}`}>
                    {story_synopsis}
                </div> 
                <div className={`${classes.sketch__note}`}>
                    {story_synopsis_translation}
                </div>                 
            </div>    
        </div>           
    </>

  )
}}


export default SayneteDeckCardHeader