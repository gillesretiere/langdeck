import React, { useContext } from 'react';
import classes from "../Decks/DeckCard.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../context/DeckContext";

const DuoChatDeckCard = ({conversation, img}) => {
    let ctx = useContext(DeckContext);
    const linkHandler = (event) => {
        ctx.current_deck.chat_deck=conversation;
        ctx.current_deck.chat_mode = true;
    };

    return (
        <div className={`${classes.card__container__green}`}>
            <Link to={{pathname:`/duo_step_page/${conversation.conversation_language}`}} onClick={linkHandler}>
            <div className={`${classes.card__wrapper}`}>
                <div className={`${classes.card__header}`}>
                    <div className={`${classes.card__title}`}>{conversation.conversation}</div>
                    <div className={`${classes.card__sub__header}`}>
                        <div className={`${classes.card__subtitle}`}>{conversation.conversation_translation}</div>
                    </div>
                </div>
                <div className={`${classes.card__img}`}>
                    <img src={conversation.conversation_illustration} alt="flag Icon" />
                </div>
            </div>          
            </Link>        
        </div>
    )
}

export default DuoChatDeckCard