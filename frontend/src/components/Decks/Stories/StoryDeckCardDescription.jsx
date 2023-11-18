import React, { useState, useContext } from 'react';
import DeckContext from "../../../context/DeckContext";

import classes from "./StoryDeckCard.module.css";
import { flexbox } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TranslateIcon from '@mui/icons-material/Translate';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import LanguageIcon from '@mui/icons-material/Language';

const StoryDeckCardDescription = ({scene}) => {
    const {story_desc, story_desc_translation} = scene;
    let params = useContext(DeckContext);

    const [translate, setTranslate] = useState(false);
    const [language, setLanguage] = useState(params.deck.lang_name_native);

    const handleClick = ({event}) => {
        setTranslate (!translate);
        setLanguage ( language === 'Français' ? (params.deck.lang_name_native):('Français'));
    }

  return (
    <>
    <Box sx={{ display:'flex', flexDirection:'column', flexGrow:1, alignContent: 'space-between', m:1}}>
        { translate ? (
            <div className={`${classes.card__desc}`}>{story_desc_translation}</div>):(
            <div className={`${classes.card__desc}`}>{story_desc}</div>)
        }
        {/* 
            <Stack direction="row" spacing={1}>
                <IconButton size="small" color="primary" variant="contained" aria-label="translate" onClick={handleClick}>
                    <TranslateIcon variant="filled"/>
                </IconButton>            
            </Stack>     
        */}
        <Button variant="outlined" size="small" sx={{my:1}} endIcon={<LanguageIcon /> } onClick={handleClick}>
            { language }
        </Button>  
  
    </Box>
    </>
  )
}

export default StoryDeckCardDescription
