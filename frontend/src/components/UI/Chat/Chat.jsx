import React, { useState, useEffect } from 'react';


const Chat = ({userName}) => {

    const [ws, setWs] = useState([]);
    console.log (userName);
    useEffect ( () => {
        let socket = new WebSocket(`ws://51.91.8.112:8000/ws/${userName}`);
        setWs (socket);
        console.log (ws);
        ws.onmessage = function (event) {
            console.log (event.data);
        };
    }, []);

    return (
        <>
            <div className='bg-blue-400 p-10 mt-20 rounded-xl'>
                <h1 className='text-2xl p-4 mb-2 text-white'>Chat Raum</h1>
                <h2 className='text-2xl p-4 mb-2 text-white'>{userName}</h2>
            </div>
        </>
    )
}

export default Chat