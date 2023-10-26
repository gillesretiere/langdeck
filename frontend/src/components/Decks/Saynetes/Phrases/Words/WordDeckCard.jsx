import React, { useState } from 'react';
import classes from "./WordDeckCard.module.css";
import KeyWordDeck from './KeyWords/KeyWordDeck';


const WordDeckCard = ({words}) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <div>{words.word_translation}</div>
        <div>{words.word_type}</div>
        {Array.isArray(words.keywords) ? words.keywords.map(
        el => {
        return (      
            <div className={classes.word__container}>
                <KeyWordDeck key={el._id} keywords = {el} />                     
            </div>                         
        )
        })
        : <KeyWordDeck keywords={words.keywords}/> }    

    </>
  )
}

export default WordDeckCard