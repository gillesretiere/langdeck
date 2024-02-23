import React from 'react';
import classes from "./LanguageDeck.module.css";
import LanguageDeckList from './LanguageDeckList';

const LanguageDeck = ({startingDeck, onSetLanguage}) => {

  return (
    <>
        <div className={classes.card_container}>
          <div className={classes.card_header}>Choisir une langue</div>
          <LanguageDeckList deck={startingDeck} onSetLanguage={onSetLanguage}/>
          <div className={classes.card_footer}></div>
        </div>
    </>
  )
}

export default LanguageDeck
