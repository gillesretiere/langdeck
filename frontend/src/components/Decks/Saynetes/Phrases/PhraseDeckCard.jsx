import React, { useState } from 'react';
import classes from "./PhraseDeckCard.module.css";
import WordDeck from './Words/WordDeck';


const PhraseDeckCard = ({words}) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className={classes.word__wrapper} onClick={() => setIsOpen(true)}>{words.word}</div>
    {isOpen && (
        <>
        <div className="word__keyword__container">
          <button className="x" onClick={() => setIsOpen(false)}>✖</button>
          <WordDeck words={words}></WordDeck>
        </div>
        </>
    )}  
    </>
  )
}

export default PhraseDeckCard