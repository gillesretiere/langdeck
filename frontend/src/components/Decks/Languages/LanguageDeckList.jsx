import React, { useContext } from "react";
import DeckContext from "../../../context/DeckContext";

import LanguageDeckCard from "./LanguageDeckCard";
import classes from "../LanguageDeckGrid.module.css";

const LanguageDeckList = ({languages}) => {
    let params = useContext(DeckContext);
    var dict = params.available_languages;
    var arr = [];
    
    for (var key in dict) {
        if (dict[key]) {
            arr.push(key);
        }
    }    
    const newArray= languages.map(element => {
        const obj = {};
        return {
            ...obj,
            label:element.lang_name_fr,
            url:`/theme_page/${element.language}`,
            icon:element.lang_flag_icon,
            action:'Choisir une langue',
            level:'language',
        };
    });
    params.drawer_navlinks = newArray;

    return (
        <div className={`${classes.card__list}`}>
            {languages && languages.filter(item => arr.includes(item.language)).map(
                (el) => {
                    return (<LanguageDeckCard key={el._id} language_deck={el} />)
                }
            )
            }
        </div>
    )
}

export default LanguageDeckList;