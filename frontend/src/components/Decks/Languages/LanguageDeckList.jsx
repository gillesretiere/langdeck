import React from "react";
import LanguageDeckCard from "./LanguageDeckCard";
import classes from "./LanguageDeckList.module.css";

const LanguageDeckList = ({languages}) => {
    return (
        <div className={`${classes.language__list}`}>
            {languages && languages.map(
                (el) => {
                    return (<LanguageDeckCard key={el._id} language_deck={el} />)
                }
            )
            }
        </div>
    )
}

export default LanguageDeckList;