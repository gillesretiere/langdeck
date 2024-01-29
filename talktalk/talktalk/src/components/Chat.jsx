import React, { useState, useEffect, useRef } from 'react';


const Chat = ({userName}) => {

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
            <div className='flex mt-20 rounded border-2 border-gray-400'>
                <div className='bg-white border-r-2 bg-green-400'>
                    <h2>Connexions : {clients.length}</h2>
                    {clients.map ((client, index) => {
                        return (
                            <p key={index} className='text-white pt-2'>
                                {client}
                            </p>
                        );
                    })}
                </div>
                <div className='p-4 bg-white h-fit rounded'>
                    <h2 className='text-xl mb-4'>
                        Bonjour {userName}
                    </h2>
                    <input ref={inputRef} type="text" className='p-3 w-full bg-gray-500 text-white' />
                    <button className='bg-red-400 w-full p-2 mt-2 rounded text-white' onClick={sendMessage}>
                        Envoyer
                    </button>
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