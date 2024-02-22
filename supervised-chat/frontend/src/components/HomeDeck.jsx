import React from 'react';
import classes from "./HomeDeck.module.css";
import HomeDeckList from './HomeDeckList';

const HomeDeck = ({startingDeck}) => {

  return (
    <div className={classes.container}>
      <div className={classes.left_container}>
        <div className={classes.card_container}>
          <div className={classes.card_header}>Choisir une langue</div>
          <HomeDeckList deck={startingDeck}/>
          <div className={classes.card_footer}></div>
        </div>

      </div>
      <div className={classes.right_container}>
        <div>En teete</div>
        <HomeDeckList deck={startingDeck}/>
      </div> 
    </div>
  )
}

export default HomeDeck
