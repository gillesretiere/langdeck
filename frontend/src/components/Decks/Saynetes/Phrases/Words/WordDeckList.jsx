import React from 'react';
import WordDeckCard from "./WordDeckCard";
import classes from "./WordDeckCard.module.css";

const WordDeckList = ({words}) => {
  return (
    <div>
    {Array.isArray(words) ? words.map(
        el => {
        return (      
            <div className={classes.word__container}>
                <WordDeckCard key={el._id} words = {el} />                     
            </div>                         
        )
        })
        : <WordDeckCard words = {words} /> }    
    </div>
  )
}

export default WordDeckList