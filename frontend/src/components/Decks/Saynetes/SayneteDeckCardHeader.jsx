import React, { useState } from 'react';
import classes from "./SayneteDeckCard.module.css";

const SayneteDeckCardHeader = ({scene}) => { if (scene) {
    const {story, story_translation, story_illustration, story_note, story_note_translated, story_synopsis, story_synopsis_translation} = scene;
    // console.log(scene);
    const image = "https://res.cloudinary.com/dhc7ovnwk/image/upload/v1702561870/langdeck/assets/images/saynetes/le%C3%A7on-bleu.png";

  return (
    <>
        <div className={classes.sketch__container}>
            <div className={classes.sketch__illustration}>
                <img src={image} alt="story illustration"></img>
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