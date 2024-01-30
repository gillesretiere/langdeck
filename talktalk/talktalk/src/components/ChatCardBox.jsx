import React, { useState, useEffect, useRef } from 'react';
import classes from "./Layout.module.css";
import ChatOptionPicker from "./ChatOptionPicker";


const ChatCardBox = ({userName}) => {

    const [ws, setWs] = useState([]);
    const [messages, setMessages] = useState([]);
    const [clients, setClients] = useState([]);
    const [options, setOptions] = useState(['Option 1', 'Option 2']);
    const [inputData, setInputData] = useState ("");
    const inputRef = useRef(null);

    const sendMessageHandler = (event) => {
        ws.send(inputRef.current.value);
        inputRef.current.value = "";
    }


    console.log (userName);
    useEffect ( () => {
        let socket = new WebSocket(`ws://51.91.8.112:8000/ws/${userName}`);

        setWs (socket);
        socket.onmessage = function (event) {
            let userData = JSON.parse(event.data);
            setMessages ((prevMessages) => [...prevMessages, userData.message]);
            let client_ids = [...userData.client_ids];
            setClients(client_ids);
            setOptions (userData.options);
        };
    }, []);

    return (
        <>
        <div className={`${classes.card__container__blue}`}>
            <div className={`${classes.card__wrapper}`}>
                <div className={`${classes.card__header}`}>
                    <div className={`${classes.card__subtitle}`}>ID</div>
                    <div className={`${classes.card__subtitle}`}>Question en français</div>
                    <div className={`${classes.card__title}`}>QUESTION traduite</div>
                </div>
                {options && options.map(
                    (el) => {
                    return (<ChatOptionPicker key={el} option={el}></ChatOptionPicker>)
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
        </div>
        </>
    )
}

export default ChatCardBox