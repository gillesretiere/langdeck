import React, { useState, useEffect, useRef } from 'react';
import classes from "./Layout.module.css";
import ChatOptionPicker from "./ChatOptionPicker";


const ChatCardBox = ({userName, onSetResponse}) => {

    const [ws, setWs] = useState([]);
    const [messages, setMessages] = useState([]);
    const [clients, setClients] = useState([]);
    const [options, setOptions] = useState([]);
    const [question_tr, setQuestion_tr] = useState('');
    const [audio, setAudio] = useState('');
    const [inputData, setInputData] = useState ("");
    const inputRef = useRef(null);
    const [respondedOption, setRespondedOption] = useState("");

    const sendMessageHandler = (event) => {
        ws.send(respondedOption);
        inputRef.current.value = "";
    }

    const setResponse = (event) => {
        setRespondedOption (event.target.getAttribute("value"));
    }

    useEffect ( () => {
        let socket = new WebSocket(`ws://51.91.8.112:8000/ws/${userName}`);

        setWs (socket);
        socket.onmessage = function (event) {
            let userData = JSON.parse(event.data);
            setMessages ((prevMessages) => [...prevMessages, userData.message]);
            let client_ids = [...userData.client_ids];
            setClients(client_ids);
            setOptions (userData.options);
            setQuestion_tr (userData.question_tr);
            setAudio (userData.audio);
        };
    }, []);

    return (
        <>
        <div className={`${classes.card__container__blue}`}>
            <div className={`${classes.card__wrapper}`}>
                <div className={`${classes.card__header}`}>
                    <div className={`${classes.card__subtitle}`}>Bonjour {userName}</div>
                    <div className={`${classes.card__subtitle}`}>{audio}</div>
                    <div className={`${classes.card__title}`}>{question_tr}</div>
                    <div className={`${classes.card__subtitle}`}>{respondedOption}</div>
                </div>
                {options && options.map(
                    (option, index) => {
                    return (<ChatOptionPicker key={index} option={option} onSetResponse={setResponse}></ChatOptionPicker>)
                }             
                )}
            </div>
            <div className={classes.button__wrapper}>
                <div>
                    <input ref={inputRef} type="text" className='p-3 m-2 w-full bg-gray-500 text-white' placeholder="Votre message"/>
                    <button color="blue_primary" m={2} variant="contained" size="small" onClick={sendMessageHandler}>
                        Envoyer
                    </button> 
                </div>  
            </div>   
            <div className={classes.log_box}>
            <ul className='p-2 text-gray-500 text-left mt-4 bg-gray-200'>
                {messages.slice(-5).map ((message, index) => {
                    return <li key={index}>{index} {message}</li>;
                }
                )}
            </ul>        
            </div>            
        </div>
        </>
    )
}

export default ChatCardBox