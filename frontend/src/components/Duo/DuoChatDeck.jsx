import React from 'react';
import DuoChatDeckCard from './DuoChatDeckCard';
import classes from "./DuoChatDeck.module.css";

const DuoChatDeck = ({chats, img}) => {
  return (
    <div className={`${classes.card__list}`}>
        {chats && chats.map(
            (el) => {
                return (<DuoChatDeckCard key={el.conversation_rec_id} conversation={el} img={img} />)
            }
        )
        }
    </div>
  )
}

export default DuoChatDeck