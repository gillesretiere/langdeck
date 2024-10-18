import React, { useState } from "react";
import classes from "./PhraseDeckWordPopper.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { styled, alpha } from "@mui/material/styles";
import { Typography, } from "@mui/material";
import { positions } from '@mui/system';

import MediaSimpleAudioPlayer from '../../../UI/MediaPlayer/MediaSimpleAudioPlayer';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const KeywordPopper = ({ word, callbackModal }) => {

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

  const [french, setFrench] = useState(true);
  const [showNote, setShowNote] = React.useState(false);

  const languageToggler = (val) => {
    console.log(val);
    if (val === "FR") {
      setFrench(true);
    } else {
      setFrench(false);
    }
  }

  const handleClick = (event) => {
    // setVisible(!visible);
    setShowNote(!showNote);
  };

  const closeButtonClickHandler = () => {
    callbackModal();
  }

  return (
    <>
      <Box
        sx={{ border: 0, borderRadius: '16px', boxShadow: 8, m: 0, pt: 3, px: 0, minWidth: '18rem', bgcolor: "white.main", }} >
        <Box>
          {!showNote ?
            <>
              <div className={`bg-white-main ${classes.word__popper__wrapper}`}>
                {french ? word.word : word.word_translation}
              </div>
              <div className={classes.word__audio__wrapper}>
                <MediaSimpleAudioPlayer media_url={french ? word.word_audio_url_fr : word.word_audio_url}></MediaSimpleAudioPlayer>
              </div>
            </> :
            <>
              <div className={`bg-white-main max-w-sm p-3 font-bold`}>
                {french ? word.word : word.word_translation}
              </div>
              <div className={`bg-white-main max-w-sm p-3`}>
                {french ? word.word_notes : word.word_notes_translation}
              </div>
            </>}

          <Stack direction="row" spacing={3} sx={{
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingLeft: 2,
            paddingRight: 2,
            marginTop: 3,
            marginBottom: 1,
          }}>
            <Button color="grey" variant={french ? 'contained' : 'outlined'} size="small" aria-label="FR" onClick={() => languageToggler('FR')} sx={{
              padding: 0,
            }}>
              <p>fre</p>
            </Button>
            <Button color="grey" variant={french ? 'outlined' : 'contained'} size="small" aria-label="TR" onClick={() => languageToggler('TR')} sx={{
              padding: 0,
              alignItems: "center",
            }}>
              <p>rom</p>
            </Button>
          </Stack>
        </Box>
        <Box sx={{ display: 'flex', zIndex: 'tooltip', }}>
          {!showNote ? <>
            <StyledButtonMore onClick={handleClick} variant="contained" fullWidth sx={{ pt: 1, borderRadius: "0px 0px 0px 16px", }}>
              <Typography variant="primary">
                Comprendre
              </Typography>
            </StyledButtonMore>
            <StyledButtonOK onClick={closeButtonClickHandler} variant="contained" fullWidth sx={{ pt: 1, borderRadius: "0px 0px 16px 0px", }}>
              <Typography variant="primary">
                Compris
              </Typography>
            </StyledButtonOK>
          </>
            : <>
              <StyledButtonOK onClick={closeButtonClickHandler} variant="contained" fullWidth sx={{ pt: 1, borderRadius: "0px 0px 16px 16px", }}>
                <Typography variant="primary">
                  Compris
                </Typography>
              </StyledButtonOK>
            </>}

        </Box>
      </Box>
    </>
  )
}

export default KeywordPopper