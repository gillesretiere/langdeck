import React, { useContext, useState} from 'react';
import classes from "./SayneteDeck.module.css";
import SayneteDeckList from './SayneteDeckList';
import SayneteDeckCardHeader from './SayneteDeckCardHeader';
import SayneteDeckCardSynopsis from "./SayneteDeckCardSynopsis";
import SayneteStart from './SayneteStart';

const SplitSayneteDeck = ({deck}) => {
  let story=deck;
  let saynete_phrases = deck.phrases;
  return (
    <div className={classes.scene__wrapper}>
        <div className={classes.scene__grid}>
            <div className={classes.scene__container}>
                {deck && <SayneteDeckCardHeader scene={deck}/>}       
                <div className={`${classes.saynete_card__go_button}`}>
                 <SayneteStart deck={saynete_phrases} />
                </div>                 
            </div>

            {/*{deck && <SayneteDeckList scene={deck} />}   */}    
        </div>
    </div>
  )
}

export default SplitSayneteDeck
