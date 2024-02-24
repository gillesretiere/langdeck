import React, {useEffect, useState} from 'react';
import classes from "./LanguageDeck.module.css";
import ChatDeckList from './ChatDeckList';
import { ConstructionOutlined } from '@mui/icons-material';

const BASE_URL = "http://51.91.8.112:4455/tschat";

const ChatDeck = ({language, startingDeck, onSetChatDeck}) => {

    const [chatDeck, setChatDeck] = useState ('');

    const fromJSON = (json) => {
        let data = json;
        return data.chats;
    };

    useEffect(()=>{
        fetch(`${BASE_URL}/${language}`)
            .then(response=>response.json())
            .then(json=>{
              setChatDeck(fromJSON(json));     
            })  
            .then()        
      },[]) 

    return (
        <>
            <div className={classes.card_container}>
            <div className={classes.card_header}>Choisir une conversation</div>
            <ChatDeckList deck={chatDeck} onSetChatDeck={onSetChatDeck}/>
            <div className={classes.card_footer}></div>
            </div>
        </>
    )
}

export default ChatDeck
