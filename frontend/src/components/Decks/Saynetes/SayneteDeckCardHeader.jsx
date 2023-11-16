import React, { useContext } from 'react';

import classes from "./SayneteDeckCard.module.css";
const SayneteDeckCardHeader = ({scene}) => { if (scene) {
    const {story, story_translation, story_illustration, story_note, story_note_translated, story_synopsis, story_synopsis_translation} = scene;
    // console.log(scene);
    
  return (
    <>
        <div className={classes.sketch__container}>
            <div className={classes.sketch__illustration}>
                <img src={story_illustration} alt="https://unsplash.com/"></img>
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
                <div className={`${classes.sketch__synopsis} ${classes.sketch__synopsis__fr}`}>
                    {story_synopsis_translation}
                </div>                        
            </div>    
        </div>           
    </>

  )
}}


export default SayneteDeckCardHeader