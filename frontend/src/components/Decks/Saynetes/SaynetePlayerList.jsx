import React, { useContext } from "react";
import DeckContext from "../../../context/DeckContext";
import classes from "../PhraseDeckGrid.module.css";
import SaynetePlayerCard from "./SaynetePlayerCard";

const SaynetePlayerList = ({phrase_deck, img}) => {

    let params = useContext(DeckContext);
    console.log(phrase_deck);

    return (
        <div className={`${classes.card__list}`}>
            {phrase_deck && phrase_deck.map(
                (el) => {
                    return (<SaynetePlayerCard key={el.phrase_rec_id} deck={el} img={img} />)
                }
            )
            }
        </div>
    )
}

export default SaynetePlayerList