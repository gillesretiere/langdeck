import React, {useState} from 'react';
import classes from "./HomeDeck.module.css";
import HomeDeckCard from './HomeDeckCard';
import LanguageDeck from './LanguageDeck';

const HomeDeck = ({startingDeck}) => {
  const [selected, setSelected] = useState (false);
  const [language, setLanguage] = useState ('');

  const clickHandler = () => {
    setSelected (!selected);
    if (language) {
      setLanguage ('');
    }
  }

  const onSetLanguage = (item) => {
    setLanguage (item);
  }

  return (
    <>
    <div className={classes.container}>
      <div className={classes.left_container}>
        { selected && <LanguageDeck startingDeck={startingDeck} onSetLanguage={onSetLanguage}/>}
      </div>
      <div className={classes.right_container}>
        <div>Conversation {language}</div>
      </div> 
    </div>
    <div className={classes.deck_base_container} onClick={clickHandler}>
      <HomeDeckCard on={selected} language={language}/>
    </div>
    </>
  )
}

export default HomeDeck
