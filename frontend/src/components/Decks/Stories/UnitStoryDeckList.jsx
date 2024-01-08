import React from 'react';
import classes from "../DeckCard.module.css";

import UnitStoryDeckCard from './UnitStoryDeckCard';

const UnitStoryDeckList = ({unit, img}) => {


    return (
        <div className={`${classes.card__list}`}>
            {unit.stories && unit.stories.map(
                (el) => {
                    return (<UnitStoryDeckCard key={el.story_rec_id} unit_story={el} img={img} />)
                }
            )
            }
        </div>
    )
}

export default UnitStoryDeckList