import React, { useContext } from 'react';
import classes from "../Decks/DeckCard.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../context/DeckContext";

const DuoChatDeckCard = ({conversation, img}) => {
    let params = useContext(DeckContext);

    return (
        <div className={`${classes.card__container}`}>
            <Link to={{pathname:`/unit_page/${conversation.conversation_language}`}}>
            <div className={`${classes.card__wrapper}`}>
                <div className={`${classes.card__header}`}>
                <div className={`${classes.card__title}`}>{conversation.conversation}</div>
                <div className={`${classes.card__sub__header}`}><div className={`${classes.card__subtitle}`}>{conversation.conversation_translation}</div></div>
                </div>
                <div className={`${classes.card__img}`}>
                <img src="https://img.freepik.com/free-photo/young-woman-laughing-cafe_171337-18490.jpg?w=1380&t=st=1706204830~exp=1706205430~hmac=522a04ad79a16bae636d47beb0e2303a3a4b18a8721702f171fd0c99a862c9de" alt="flag Icon" />
                </div>
            </div>          
            </Link>        
        </div>
    )
}

export default DuoChatDeckCard