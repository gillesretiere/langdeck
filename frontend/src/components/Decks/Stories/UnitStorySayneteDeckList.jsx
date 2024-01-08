import React from 'react';
import classes from "../DeckCard.module.css";

import UnitStoryDeckCard from './UnitStoryDeckCard';

const UnitStorySayneteDeckList = ({saynetes, img}) => {


    return (
        <div className={`${classes.card__list}`}>
            {saynetes && saynetes.map(
                (el) => {
                    return (<UnitStoryDeckCard key={el.story_rec_id} unit_story={el} img={img} />)
                }
            )
            }
        </div>
    )
}

export default UnitStorySayneteDeckList