import React, { useState, useContext } from 'react';
import DeckContext from "../../../context/DeckContext";

import classes from "./SayneteDeckCardSynopsis.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const SayneteDeckCardSynopsis = ({scene}) => {
    const {story_desc, story_desc_translation} = scene;
    let params = useContext(DeckContext);

    const [translate, setTranslate] = useState(false);
    const [language, setLanguage] = useState(params.language_deck.lang_name_native);

    const handleClick = ({event}) => {
        setTranslate (!translate);
        setLanguage ( language === 'Français' ? (params.language_deck.lang_name_native):('Français'));
    }

  return (
    <>
    <div className={`${classes.card__container}`}>
    <Box sx={{ display:'flex', flexDirection:'column', flexGrow:1, alignContent: 'space-between', m:1}}>
        { translate ? (
            <div className={`${classes.card__desc}`}>{scene.story_synopsis_translation}</div>):(
            <div className={`${classes.card__desc}`}>{scene.story_synopsis}</div>)
        }
         <Typography align='center'>
        <Button variant="outlined" size="small" sx={{my:1, maxWidth:'30rem',  }} endIcon={<LanguageIcon /> } onClick={handleClick}>
            { language }
        </Button>  
        </Typography>
    </Box>
    </div>
    </>
  )
}

export default SayneteDeckCardSynopsis
