import React, { useState } from "react";
import classes from "./PhraseDeckWordPopper.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import { Typography, } from "@mui/material";
import MediaSimpleAudioPlayer from '../../../UI/MediaPlayer/MediaSimpleAudioPlayer';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const SayneteDeckPlayPopper = ({ word, callbackModal }) => {
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


  const StyledButtonMore = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
    },
  }));

  const StyledButtonOK = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
    },
  }));



  console.log({ word });
  return (
    <>
      <Box
        sx={{ border: 0, borderRadius: '16px', boxShadow: 8, m: 0, pt: 1, px: 0, minWidth: '14rem', bgcolor: "analogous.light" }} >
        {/* audio */}
        {showNote ? (
          <>
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', minWidth: '14rem', maxWidth: '18rem', p: 0, bgcolor: "analogous.light" }}>
              <div className={classes.word_notes_fr}>
                <div className={classes.word_fr}>{word.word} : </div>
                <div className={classes.note_fr}>{word.word_notes}</div>
                {
                  word.word_nutri_notes &&
                  <div className={classes.word__popper__wrapper__notes__fr} >
                    <InfoOutlinedIcon />&nbsp;
                    {word.word_nutri_notes}
                  </div>
                }
              </div>
              <div className={classes.word_notes_tr}>
                <div className={classes.word_tr}>{word.word_translation} : </div>
                <div className={classes.note_tr}>{word.word_notes_translation}</div>
                {
                  word.word_nutri_notes &&
                  <div className={classes.word__popper__wrapper__notes} >
                    <InfoOutlinedIcon />&nbsp;
                    {word.word_nutri_notes_translation}
                  </div>
                }
              </div>

            </Box>

          </>
        ) : (
          <>
            <div className={classes.word__popper__wrapper}>{word.word}</div>
            <div className={classes.word__audio__wrapper}><MediaSimpleAudioPlayer media_url={word.word_audio_url_fr}></MediaSimpleAudioPlayer></div>
            <div className={classes.word__popper__wrapper_tr}>{word.word_translation}</div>
          </>
        )
        }

        <Box sx={{ display: 'flex' }}>
          <StyledButtonMore onClick={handleClick} variant="contained" fullWidth sx={{ pt: 1, borderRadius: "0px 0px 0px 16px", }}>
          <Typography variant="primary">
              ?
            </Typography>
          </StyledButtonMore>
          <StyledButtonOK onClick={closeButtonClickHandler} variant="contained" fullWidth sx={{ pt: 1, borderRadius: "0px 0px 16px 0px", }}>
            <Typography variant="primary">
              Compris
            </Typography>
          </StyledButtonOK>

        </Box>



      </Box>

    </>
  )
}

export default SayneteDeckPlayPopper