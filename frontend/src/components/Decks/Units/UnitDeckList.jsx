import React, { useContext } from 'react';
import classes from "../DeckCard.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";

const UnitDeckList = ({deck}) => {
    let ctx = useContext(DeckContext);

  return (
    <div>
        <Link onClick={handleClick} to={`/story_page/${language}`}>
            <div className={`${classes.card__list__container}`}>
            </div>
        </Link>
    </div>
  )
}

export default UnitDeckList