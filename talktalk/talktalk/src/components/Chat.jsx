import React, { useState, useEffect, useRef } from 'react';
import classes from "./Layout.module.css";


const Chat = ({userName, }) => {

    const [ws, setWs] = useState([]);
    const [messages, setMessages] = useState([]);
    const [clients, setClients] = useState([]);
    const [options, setOptions] = useState([]);
    const [inputData, setInputData] = useState ("");
    const inputRef = useRef(null);

    const sendMessage = (event) => {
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

                <div>
                    <h2>Connexions : {clients.length}</h2>
                    {clients.map ((client, index) => {
                        return (
                            <p key={index} className='text-white pt-2'>
                                {client}
                            </p>
                        );
                    })}
                </div>
                <div className='text-white'>
                    <h2 className='text-xl mb-4'>
                        Bonjour {userName}
                    </h2>
                    <div className='bg-blue-400 p-10 mt-20 rounded-xl'>

                    <input ref={inputRef} type="text" className='p-3 w-full bg-gray-500 text-white' />
                    <button className='bg-red-400 w-full p-2 mt-2 rounded text-white' onClick={sendMessage}>
                        Envoyer
                    </button>
                    </div>
                    <ul className='p-2 text-gray-500 text-left mt-4 bg-gray-200'>
                        {messages.map ((message, index) => {
                            return <li key={index}>{message}</li>;
                        }
                        )}
                        {options && options.map ((option, index) => {
                            return <li key={index}>{option.option_translation}</li>;
                        }
                        )}
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Chat