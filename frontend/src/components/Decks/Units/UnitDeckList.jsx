import React, { useContext } from 'react';
import classes from "../DeckCard.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../../context/DeckContext";
import UnitDeckCard from './UnitDeckCard';

const UnitDeckList = ({deck}) => {
  const {theme_language, theme_rec_id, lessons, } = deck.theme;
  let ctx = useContext(DeckContext);

  const handleClick = () =>  {
    ctx.deck=theme_language;
    ctx.language_deck=theme_language;
  }

  return (
    <div>
        <div className={`${classes.card__list}`}>
            {lessons && lessons.map(
                (el) => {
                    return (<UnitDeckCard key={el.lesson_rec_id} unit={el} />)
                }
            )
            }
        </div>
    </div>
  )
}

export default UnitDeckList