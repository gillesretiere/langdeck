import React, { useState } from "react";
import classes from "./PhraseDeckWordPopper.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import MediaSimpleAudioPlayer from '../../../UI/MediaPlayer/MediaSimpleAudioPlayer';
import PopperWordNotes from '../../../UI/Popper/PopperWordNotes';

const SayneteDeckPlayPopper = ({word, callbackModal}) => {
  const [visible, setVisible] = React.useState(false);
  const [translate, setTranslate] = React.useState(false);
  const [showNote, setShowNote] = React.useState(false);
  const [showNutriNote, setShowNutriNote] = React.useState(false);

  const handleClick = (event) => {
    // setVisible(!visible);
    setShowNote(!showNote);
  };

  const handleShowNutriNoteClick = (event) => {
    setShowNutriNote(!showNutriNote);
  };

  const closeButtonClickHandler = () => {
    callbackModal();
  }

  console.log({word});
  return (
    <>
        <Box 
          sx={{ width:'100%', border: 0, borderRadius: '16px', boxShadow: 8, m:0, pt:1, px:0, bgcolor: "background.paper" }} >
          {/* audio */}
          { showNote ? (
            <>
            <div className={classes.word__popper__wrapper}>{word.word}</div>
            <div className={classes.word__popper__wrapper__notes} >{word.word_notes}</div>
                {
                word.word_nutri_notes && false && 
                <ReadMoreIcon color="primary" onClick={handleShowNutriNoteClick}/>
                }
                {
                    word.word_nutri_notes && 
                    <div className={classes.word__popper__wrapper__notes} >
                    <img src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1704986790/langdeck/nutrition-plan.png"/>
                        {word.word_nutri_notes}
                    </div>
                }
            </>
          ):(
            <>
            <div className={classes.word__popper__wrapper}>{word.word}</div>
            <div className={classes.word__audio__wrapper}><MediaSimpleAudioPlayer media_url={word.word_audio_url_fr}></MediaSimpleAudioPlayer></div>            
            <div className={classes.word__popper__wrapper_tr}>{word.word_translation}</div>
            </>
          )
          }

          <div className={classes.container}>
            <Button color="blue_tertiary" onClick={handleClick} variant="contained" fullWidth endIcon={<ReadMoreIcon />} sx={{ pt:1, borderRadius: "0px 0px 0px 16px", }}>
            Plus
            </Button> 
            <Button color="blue_primary" onClick={closeButtonClickHandler} variant="contained" fullWidth sx={{ pt:1, borderRadius: "0px 0px 16px 0px", }}>
            OK
            </Button>   
          </div>

                 

        </Box>  
      
    </>
  )
}

export default SayneteDeckPlayPopper