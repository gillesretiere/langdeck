import React from 'react';
import classes from "../WordDeckCard.module.css";

const KeyWordDeckCard = ({keyword}) => {
  return (
    <div className={classes.word__wrapper}>{keyword.word_translation}</div>
  )
}

export default KeyWordDeckCard