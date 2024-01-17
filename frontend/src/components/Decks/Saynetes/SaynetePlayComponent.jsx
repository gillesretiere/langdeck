import React, { useState, useContext } from 'react';
import classes from "./SaynetePlayDeck.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MediaSimpleAudioPlayerBig from '../../UI/MediaPlayer/MediaSimpleAudioPlayerBig';
import MediaSimpleAudioPlayerMedFr from '../../UI/MediaPlayer/MediaSimpleAudioPlayerMedFr';
import MediaAdvancedAudioPlayer from '../../UI/MediaPlayer/MediaAdvancedAudioPlayer';
import MediaSimpleAudioPlayerMedTr from '../../UI/MediaPlayer/MediaSimpleAudioPlayerMedTr';
import SayneteDeckPlayHighlightWords from "./Phrases/SayneteDeckPlayHighlightWords";
import DeckContext from "../../../context/DeckContext";


const SaynetePlayComponent = ({deck}) => {
    let ctx = useContext(DeckContext);
    console.log(deck);

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
      if (activePhrase !== deck.length - 1) {
        setActivePhrase((prev) => prev + 1)
      } else {
        setActivePhrase(0)
      }      
      ctx.progression_1_state = activePhrase;
    }
    const onClickPrevious = () => {
      if (activePhrase !== 0) {
        setActivePhrase((prev) => prev - 1)
      } else {
        setActivePhrase(0)
      }        
      ctx.progression_1_state = activePhrase  
    }      

    const { phrase, phrase_translation, phrase_position, phrase_audio_url, phrase_audio_url_fr, story_illustration} = deck[activePhrase];

    return (
        <div className={classes.wrapper}>
            <div className={classes.grid}>
                <div className={classes.container}>        
                    <Box sx={{justifyContent: 'center'}}> 
                        <div className={classes.card__container}>
                          <div className={classes.phrase_num}></div>
                            <div className={classes.audio__wrapper_fr}>
                              <div className={classes.icon__audio__wrapper}>
                                <MediaAdvancedAudioPlayer media_url={phrase_audio_url_fr} illustration={story_illustration}></MediaAdvancedAudioPlayer>
                              </div>
                                <Box sx={{ display: 'flex' }}  justifyContent="space-between" alignItems='center'>
                                  <IconButton color="blue_tertiary" m={1} className={classes.mui_button} variant="contained" size="large" onClick={onClickPrevious} disabled={activePhrase === 0}>
                                    <ArrowBackIosIcon fontSize="large"/>
                                  </IconButton>                                 
                                  <IconButton color="blue_tertiary" m={1} className={classes.mui_button} variant="contained" size="large" onClick={onClickNext} disabled={activePhrase === deck.length - 1}>
                                    <ArrowForwardIosIcon fontSize="large"/>
                                  </IconButton> 
                                </Box>                                
                                <SayneteDeckPlayHighlightWords phrase={deck[activePhrase]}></SayneteDeckPlayHighlightWords>
                            </div>                             
                            <div className={classes.audio__wrapper}>
    
                              <Box sx={{ display: 'flex' }}  justifyContent="center" alignItems='center'>
                                <div className={classes.text__audio__wrapper}>
                                  <div>{phrase_translation}</div>
                                  <div className='flex items-center'><MediaSimpleAudioPlayerMedTr media_url={phrase_audio_url}></MediaSimpleAudioPlayerMedTr> </div>                            
                                </div>  
                              </Box>

                                                                                  
                                {/*<div className={classes.icon__audio__wrapper}><MediaSimpleAudioPlayerMedTr media_url={phrase_audio_url}></MediaSimpleAudioPlayerMedTr></div>*/}
                            </div>       
                                 
                        </div>
                        {/*
                        <div className={classes.flex_right}>
                        <Box color="secondary" m={1}>
                          <Button color="tertiary" fullWidth="true" m={1} className={classes.mui_button} variant="outlined" size="small" onClick={onClickPrevious} disabled={activePhrase === 0}>
                              Précédent
                          </Button>  
                        </Box>                           
                        <Box m={1}>
                          <Button color="secondary" fullWidth="true" m={1} className={classes.mui_button} variant="contained" size="small" onClick={onClickNext} disabled={activePhrase === deck.length - 1}>
                              Suivant
                          </Button>                                     
                        </Box>                           

                        </div> 
                        */} 
                    </Box>   
                </div>
            </div>
        </div>
    )
}

export default SaynetePlayComponent