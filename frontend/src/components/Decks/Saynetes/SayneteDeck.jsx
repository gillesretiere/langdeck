import React, { useContext, useState} from 'react';
import classes from "./SayneteDeck.module.css";
import SayneteDeckList from './SayneteDeckList';
import SayneteDeckCardHeader from './SayneteDeckCardHeader';
import SayneteDeckCardSynopsis from "./SayneteDeckCardSynopsis";

const SayneteDeck = ({deck}) => {
  console.log(deck);
  return (
    <div className={classes.scene__wrapper}>
        <div className={classes.scene__grid}>
            <div className={classes.scene__container}>
                {deck && <SayneteDeckCardHeader scene={deck}/>}
                <SayneteDeckCardSynopsis scene={deck}/>                
            </div>
            {deck && <SayneteDeckList scene={deck} />}       
        </div>
    </div>
  )
}

export default SayneteDeck
