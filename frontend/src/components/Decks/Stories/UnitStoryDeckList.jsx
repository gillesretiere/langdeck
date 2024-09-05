import React, { useContext } from "react";
import DeckContext from "../../../context/DeckContext";
import classes from "../StoryDeckGrid.module.css";

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
    console.log(stories);
    const newArray= stories.map(element => {
        const obj = {};
        return {
            ...obj,
            label:element.story_name,
            url:`/saynete_player_page/${element.story_translation_id}`,
            icon:element.story_illustration,
            action:'Choisir une saynète',
            story:element,
        };
    });
    params.drawer_navlinks = newArray;    
    console.log(params.drawer_navlinks);

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