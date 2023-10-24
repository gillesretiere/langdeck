import React from 'react';
import classes from "./SceneDeckCard.module.css";
import SceneDeckCard from './SceneDeckCard';

const SceneDeckCardIterator = ({scenes, img}) => {
  return (
    <div className={`${classes.card__list}`}>
        {scenes && scenes.map(
            (el) => {
                return (<SceneDeckCard key={el.story_rec_id} scene={el} img={img} />)
            }
        )
        }
    </div>
  )
}

export default SceneDeckCardIterator