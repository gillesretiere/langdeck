import React, { useState, useContext } from 'react';
import classes from "./StudyDeck.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MediaSimpleAudioPlayerBig from '../../UI/MediaPlayer/MediaSimpleAudioPlayerBig';



const StudyComponent = ({deck}) => {
  const phrases = deck.tp_phrases;

  const [hideImage, setHideImage] = useState(false);
  const [hideImageLabel, setHideImageLabel] = useState("Cacher l'illustration");
  const [activePhrase, setActivePhrase] = useState(0);

  const handleClick = ({event}) => {
    setHideImage (!hideImage);
    if (hideImage) {
      setHideImageLabel ("Cacher l'illustration");
    } else {
      setHideImageLabel ("Afficher l'illustration");
    }
  }
  const onClickNext = () => {
    if (activePhrase !== phrases.length - 1) {
      setActivePhrase((prev) => prev + 1)
    } else {
      setActivePhrase(0)
    }        
  }
  const onClickPrevious = () => {
    if (activePhrase !== 0) {
      setActivePhrase((prev) => prev - 1)
    } else {
      setActivePhrase(0)
    }        
  }  
  const { tp_phrase, tp_phrase_translation, tp_phrase_order, tp_phrase_audio_url} = phrases[activePhrase];

  return (
    <div className={classes.study__wrapper}>
      <div className={classes.study__grid}>
        <div className={classes.study__container}>
          <Box textAlign="center">
            <Button variant="outlined" size="small" sx={{my:1}} onClick={handleClick}>
                { hideImageLabel }
            </Button>
          </Box>
 
          <Box sx={{ display:'flex', flexDirection:'column', flexGrow:1, m:1}}>
               
            { hideImage ? (
                <div>&nbsp;</div>):(
                <div className={classes.study_card__lesson__illustration}>
                  <img src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1701422568/langdeck/assets/images/pictorials/t5vale0dleo6hlmsusgz.png" alt="tp illustration"></img>
                </div>  
                )
            }

          </Box>
          <Box sx={{justifyContent: 'center'}}> 
            <div className={classes.study_card__lesson__illustration}>
              <div className={classes.study__card__phrase}>
                <div className={classes.study__audio__wrapper}>
                  <div className={classes.text__audio__wrapper}>{tp_phrase_translation}</div>
                  <div className={classes.icon__audio__wrapper}><MediaSimpleAudioPlayerBig media_url={tp_phrase_audio_url}></MediaSimpleAudioPlayerBig></div>
                </div>              
              </div>
            </div>      
            <div className={classes.flex_right}>
              <button onClick={onClickPrevious} disabled={activePhrase === 0}>
                  Précédent
              </button>                
              <button onClick={onClickNext} disabled={activePhrase === phrases.length - 1}>
                  Suivant
              </button>
            </div>  
          </Box>      
        </div>
      </div>
    </div>
  )
}

export default StudyComponent