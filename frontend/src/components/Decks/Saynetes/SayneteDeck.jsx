import React, { useContext, useState} from 'react';
import DeckContext from "../../../context/DeckContext";
import classes from "./SayneteDeck.module.css";
import SayneteDeckList from './SayneteDeckList';
import SayneteDeckCardHeader from './SayneteDeckCardHeader';
import { PanoramaRounded } from '@mui/icons-material';
import Button from "@mui/material/Button";
import TranslateIcon from '@mui/icons-material/Translate';

const SayneteDeck = ({deck}) => {
  let params = useContext(DeckContext);
  const [translate, setTranslate] = React.useState(false);

  const handleClick = (event) => {
    // setVisible(!visible);
    setTranslate(!translate);
  };
  return (
    <div className={classes.scene__wrapper}>
        <div className={classes.scene__grid}>
            <div className={classes.scene__container}>
                {deck && <SayneteDeckCardHeader scene={deck.scene}/>}
                { translate ? (
                    <div className={`${classes.sketch__synopsis} ${classes.sketch__synopsis__fr}`}>
                        {deck.scene.story_synopsis_translation}
                    </div> 
                ):(
                    <div className={`${classes.sketch__synopsis} ${classes.sketch__synopsis__fr}`}>
                        {deck.scene.story_synopsis}
                    </div> 
                )}
                                
                <Button variant="outlined" size="small" startIcon={<TranslateIcon />} onClick={handleClick}>
                Translate
                </Button>                  
            </div>
            {deck && <SayneteDeckList scene={deck.scene} />}       
        </div>
    </div>
  )
}

export default SayneteDeck
