import React, { useState } from 'react';
import classes from "./StoryDeckCard.module.css";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import TranslateIcon from '@mui/icons-material/Translate';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const StoryDeckCardDescription = ({scene}) => {
    const {story_desc, story_desc_translation} = scene;
    const [translate, setTranslate] = useState(false);

    const handleClick = ({event}) => {
        setTranslate (!translate);
    }

  return (
    <>
    <div className={`${classes.card__desc}`}>
        { translate ? (
            <div>{scene.story_desc_translation}</div>):(
            <div>{scene.story_desc}</div>)
        }
        <Stack direction="row" spacing={1}>
            <IconButton size="small" color="primary" variant="contained" aria-label="translate" onClick={handleClick}>
                <TranslateIcon variant="contained"/>
            </IconButton>            
        </Stack>
    <Button variant="outlined" size="small" sx={{my:1}} endIcon={<SyncAltIcon /> } onClick={handleClick}>
        Translate
    </Button>    
    </div>  
 
    </>
  )
}

export default StoryDeckCardDescription
