import React, { useState, useContext, useEffect, useRef } from 'react';
import DeckContext from "../../context/DeckContext";


const DuoChatCnx = ({userName, setConnection}) => {
    let ctx = useContext(DeckContext);

    const [ws, setWs] = useState([]);
    const [messages, setMessages] = useState([]);
    const [clients, setClients] = useState([]);
    const [inputData, setInputData] = useState ("");
    const inputRef = useRef(null);

    const sendMessage = (event) => {
       let data = {
            "message": "some message",
            "language": "some language",
            "question": "question",
            "question_tr" : "question traduite",
            "reponses" : "vk réponses",
            "reponses_tr" : "vk réponses traduites",
        };  
        data.message = inputRef.current.value;
        data.language = ctx.current_deck.language_deck.language;
        data.question_tr = ctx.current_deck.chat_step_deck.step_translation;
        //ws.send(inputRef.current.value);
        ws.send(JSON.stringify(data));
        inputRef.current.value = "";
    }

    console.log (userName);
    useEffect ( () => {
        let socket = new WebSocket(`ws://51.91.8.112:8000/ws/a/${userName}`);
        setWs(socket);
        //ctx.current_deck.chat_deck.conversation.ws = socket;

        socket.onmessage = function (event) {
            let userData = JSON.parse(event.data);
            setMessages ((prevMessages) => [...prevMessages, userData.message]);
            let client_ids = [...userData.client_ids];
            setClients(client_ids);
        };
    }, []);

    return (
        <>
              <button 
                  className='w-full bg-gray-400 rounded' onClick={setConnection}>Login
              </button>
        </>
    )
}

export default DuoChatCnx