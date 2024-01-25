import React from 'react';
import DuoLanguageDeckCard from "./DuoLanguageDeckCard";
import classes from "./DuoLanguageDeck.module.css";


const DuoLanguageDeck = ({languages}) => {
  return (
    <div className={`${classes.language__list}`}>
    {languages && languages.map(
        (el) => {
            return (<DuoLanguageDeckCard key={el._id} language_deck={el} />)
        }
    )
    }
    </div>
  )
}

export default DuoLanguageDeck