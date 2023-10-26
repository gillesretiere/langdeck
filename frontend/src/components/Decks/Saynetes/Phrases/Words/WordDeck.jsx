import React from 'react';
import WordDeckList from "./WordDeckList";

const WordDeck = ({words}) => {
  return (
    <div>
        <WordDeckList words = {words}></WordDeckList>
    </div>
  )
}

export default WordDeck