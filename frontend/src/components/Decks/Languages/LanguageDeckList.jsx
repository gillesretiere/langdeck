import React, { useContext } from "react";
import DeckContext from "../../../context/DeckContext";

import LanguageDeckCard from "./LanguageDeckCard";
import classes from "./LanguageDeckList.module.css";

const LanguageDeckList = ({languages}) => {
    let params = useContext(DeckContext);

    var dict = params.available_languages;
    var arr = [];
    
    for (var key in dict) {
        if (dict[key]) {
            arr.push(key);
        }
    }    
    return (
        <div className={`${classes.language__list}`}>
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