import React, { useContext } from 'react';
import DeckContext from "../../../context/DeckContext";
import classes from "./SayneteDeck.module.css";
import SayneteDeckList from './SayneteDeckList';
import SayneteDeckCardHeader from './SayneteDeckCardHeader';
import { PanoramaRounded } from '@mui/icons-material';

const SayneteDeck = ({deck}) => {
  let params = useContext(DeckContext);
  // console.log(deck);
  return (
    <div className={classes.scene__wrapper}>
        <div className={classes.scene__grid}>
            <div className={classes.scene__container}>
                {deck && <SayneteDeckCardHeader scene={deck.scene}/>}
            </div>
            {deck && <SayneteDeckList scene={deck.scene} />}       
        </div>
    </div>
  )
}

export default SayneteDeck
