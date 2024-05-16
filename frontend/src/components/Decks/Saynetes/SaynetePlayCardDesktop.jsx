import React, { useState, useContext } from 'react';
import classes from "./SaynetePlayCardDesktop.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CardAudioPlayerDesktop from '../../UI/MediaPlayer/CardAudioPlayerDesktop';
import MediaSimpleAudioPlayerMedTr from '../../UI/MediaPlayer/MediaSimpleAudioPlayerMedTr';
import PhrasePlayer from "./Phrases/PhrasePlayer";
import DeckContext from "../../../context/DeckContext";

const SaynetePlayCardDesktop = ({deck, media_type}) => {
  let ctx = useContext(DeckContext);
  const [activePhrase, setActivePhrase] = useState(0);

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

  const { phrase, phrase_translation, phrase_position, phrase_audio_url, phrase_audio_url_fr, story_illustration, phrase_illustration,} = deck[activePhrase];

  return (
    <div className={classes.wrapper}>
      <div>
      <Box sx={{justifyContent: 'center'}}> 
        <div className={classes.card__container}>
          <div className={classes.card__navigator}>
            <div className={classes.icon__audio__wrapper}>
              <CardAudioPlayerDesktop media_url={phrase_audio_url_fr} illustration={phrase_illustration}></CardAudioPlayerDesktop>
            </div>
            <Box sx={{ display: 'flex' , flexDirection:'column'}}  justifyContent="space-around" alignItems='center'>
              <Box sx={{ display: 'flex' , flexDirection:'row'}} >
                <IconButton color="blue_tertiary" m={1} className={classes.mui_button} variant="contained" size="large" onClick={onClickPrevious} disabled={activePhrase === 0}>
                  <ArrowBackIosIcon fontSize="large"/>
                </IconButton>  
                <Box sx={{ display: 'flex' }}  justifyContent="space-between" alignItems='center'>
                  <div className={classes.phrase_position}>{phrase_position}</div>        
                </Box>
                <IconButton color="blue_tertiary" m={1} className={classes.mui_button} variant="contained" size="large" onClick={onClickNext} disabled={activePhrase === deck.length - 1}>
                  <ArrowForwardIosIcon fontSize="large"/>
                </IconButton> 
              </Box>

              <Box sx={{ display: 'flex' }}  justifyContent="center" alignItems='center'>
              {media_type==='desktop' && 
                <div className={classes.phrase__wrapper__desktop}>
                  <PhrasePlayer phrase={deck[activePhrase]}></PhrasePlayer>
                  <div className='flex items-center'><MediaSimpleAudioPlayerMedTr media_url={phrase_audio_url_fr}></MediaSimpleAudioPlayerMedTr> </div>                            
                </div>
              }
              {media_type==='landscape' && 
                <div className={classes.phrase__wrapper__landscape}>
                  <PhrasePlayer phrase={deck[activePhrase]}></PhrasePlayer>
                </div>
              }              
              </Box>              
              <Box sx={{ display: 'flex' }}  justifyContent="center" alignItems='center'>
                <div className={classes.phrase__wrapper__tr}>
                  <div className={classes.phrase_translation}>{phrase_translation}</div>
                  <div className='flex items-center'><MediaSimpleAudioPlayerMedTr media_url={phrase_audio_url}></MediaSimpleAudioPlayerMedTr> </div>                            
                </div>  
              </Box>                    
            </Box>
          </div>
        </div>
      </Box>
      </div>
    </div>
  )
}

export default SaynetePlayCardDesktop