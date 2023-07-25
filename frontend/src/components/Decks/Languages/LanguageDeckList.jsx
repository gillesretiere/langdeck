import React from "react";
import LanguageDeckCard from "../../LanguageDeckCard";
import classes from "./LanguageDeckList.module.css";

const LanguageDeckList = ({languages}) => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
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