import React from 'react';
import classes from "./StoryDeckCard.module.css";
import StoryDeckCard from './StoryDeckCard';

const StoryDeckList = ({scenes, img}) => {
  return (
    <div className={`${classes.card__list}`}>
        {scenes && scenes.map(
            (el) => {
                return (<StoryDeckCard key={el.story_rec_id} scene={el} img={img} />)
            }
        )
        }
    </div>
  )
}

export default StoryDeckList