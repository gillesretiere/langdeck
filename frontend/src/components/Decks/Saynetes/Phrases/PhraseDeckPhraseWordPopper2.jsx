import React, { useState } from "react";
import classes from "./PhraseDeckWordPopper.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MediaSimpleAudioPlayer from '../../../UI/MediaPlayer/MediaSimpleAudioPlayer';
import PopperWordNotes from '../../../UI/Popper/PopperWordNotes';

const PhraseDeckPhraseWordPopper2 = ({word, callbackModal}) => {
  const [visible, setVisible] = React.useState(false);
  const [translate, setTranslate] = React.useState(false);

  const handleClick = (event) => {
    // setVisible(!visible);
    setTranslate(!translate);
  };

  const closeButtonClickHandler = () => {
    callbackModal();
  }


  return (
    <>
        <Box 
          sx={{ width:'100%', border: 0, borderRadius: '16px', boxShadow: 8, m:0, pt:1, px:0, bgcolor: "background.paper" }} >
          {/* audio */}
          { translate ? (
            <>
            <div className={classes.word__popper__wrapper}>{word.word_translation}</div>
            <div className={classes.word__audio__wrapper}><MediaSimpleAudioPlayer media_url={word.word_audio_url}></MediaSimpleAudioPlayer></div>
            <div className={classes.word__audio__wrapper}><PopperWordNotes word_notes={word.word_notes} word_nutri_notes={word.word_nutri_notes}/></div>
            </>
          ):(
            <>
            <div className={classes.word__popper__wrapper}>{word.word}</div>
            <div className={classes.word__audio__wrapper}><MediaSimpleAudioPlayer media_url={word.word_audio_url_fr}></MediaSimpleAudioPlayer></div>            
            <div className={classes.word__audio__wrapper}><PopperWordNotes word_notes={word.word_notes} word_nutri_notes={word.word_nutri_notes}/></div>
            </>
          )
          }
          
          { visible ? (
            <>
          <div className={classes.container}>
            <div className={classes.word_notes}>
            <p>{word.word_notes}</p>
            <Box
                display="flex"
                justifyContent="space-between"
                flexDirection="column"
                alignItems="flex-end"
                sx={{ borderRadius: 0, my: 0, mx:0, pt:1, px:0, }}
                >
            </Box>               
        </div>
        <div className={classes.word_nutri_notes}>
            <p>{word.word_nutri_notes}</p>
            <Box
                display="flex"
                justifyContent="space-between"
                flexDirection="column"
                alignItems="flex-end"
                sx={{ borderRadius: 0, my: 0, mx:0, pt:1, px:0,}}
                >

            </Box>  
        </div>  

          </div>
          <Button className={classes.button1} onClick={closeButtonClickHandler} variant="contained" color="primary" fullWidth sx={{ pt:1, borderRadius: "0px 0px 16px 16px", backgroundColor: "hsl(71, 73%, 54%)",}}>
                    Close All
        </Button>
        </>
          ) : (
            <>
          <div className={classes.container}>
            <Button color="primary" className={classes.button1} onClick={handleClick} variant="contained" fullWidth sx={{ pt:1, borderRadius: "0px 0px 0px 16px", }}>
            Translate
            </Button> 
            <Button color="secondary" className={classes.button2} onClick={closeButtonClickHandler} variant="contained" fullWidth sx={{ pt:1, borderRadius: "0px 0px 16px 0px", }}>
            OK
            </Button> 
          </div>
             </>
          )
          }  

                 

        </Box>  
      
    </>
  )
}

export default PhraseDeckPhraseWordPopper2