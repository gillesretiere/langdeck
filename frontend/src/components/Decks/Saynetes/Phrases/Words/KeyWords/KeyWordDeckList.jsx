import React from 'react';
import classes from "../WordDeckCard.module.css";
import KeyWordDeckCard from "./KeyWordDeckCard"

const KeyWordDeckList = ({keywords}) => {
  return (
    <div>
    {Array.isArray(keywords) ? keywords.map(
        el => {
        return (      
            <div className={classes.word__container}>
                <KeyWordDeckCard key={el._id} keyword = {el} />                     
            </div>                         
        )
        })
        : <KeyWordDeckCard keyword = {keywords} /> }            
    </div>
  )
}

export default KeyWordDeckList