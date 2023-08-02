import React from 'react';
import classes from "./SceneDeck.module.css";
import SketchCardIterator from './Sketch/SketchCardIterator';
import SketchHeader from './Sketch/SketchHeader';

const SceneDeck = ({deck}) => {
  return (
    <div className={classes.scene__wrapper}>
        <div className={classes.scene__grid}>
            <div className={classes.scene__container}>
                {deck && <SketchHeader scene={deck.scene}/>}
            </div>
            {deck && <SketchCardIterator scene={deck.scene} />}       
        </div>
    </div>
  )
}

export default SceneDeck
