import React, {useState} from 'react';
import classes from "./HomeDeck.module.css";
import HomeDeckCard from './HomeDeckCard';
import LanguageDeck from './LanguageDeck';

const HomeDeck = ({startingDeck}) => {
  const [selected, setSelected] = useState (false);

  const clickHandler = () => {
    setSelected (!selected);
  }

  return (
    <>
    <div className={classes.container}>
      <div className={classes.left_container}>
        { selected && <LanguageDeck startingDeck={startingDeck}/>}
      </div>
      <div className={classes.right_container}>
        <div>Conversation</div>
      </div> 
    </div>
    <div className={classes.deck_base_container} onClick={clickHandler}>
      <HomeDeckCard on={selected}/>
    </div>
    </>
  )
}

export default HomeDeck
