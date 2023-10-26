import React from 'react';
import PhraseDeckCard from "./PhraseDeckCard";
import classes from "./PhraseDeckCard.module.css";

const PhraseDeckList = ({words}) => {
  return (
    <div>
    {Array.isArray(words) ? words.map(
        el => {
        return (      
            <div className={classes.word__container}>
                <PhraseDeckCard key={el._id} words = {el} />                     
            </div>                         
        )
        })
        : <PhraseDeckCard words = {words} /> }    
    </div>
  )
}

export default PhraseDeckList