import React, { useContext } from "react";
import DeckContext from "../../../context/DeckContext";
import classes from "../DeckCard.module.css";

import UnitStoryDeckCard from './UnitStoryDeckCard';

const UnitStoryDeckList = ({unit, img}) => {
    let {stories} = unit;
    let params = useContext(DeckContext);
    var dict = params.available_stories;
    var arr = [];
    
    for (var key in dict) {
        if (dict[key]) {
            arr.push(key);
        }
    } 

    return (
        <div className={`${classes.card__list}`}>
            {stories && stories.filter(item => arr.includes(item.story_rec_id)).map(
                (el) => {
                    return (<UnitStoryDeckCard key={el.story_rec_id} unit_story={el} img={img} />)
                }
            )
            }
        </div>
    )
}

export default UnitStoryDeckList