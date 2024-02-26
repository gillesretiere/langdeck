import React, {useEffect, useState, } from 'react'
import { CreateConnection } from './CreateConnection';

const ChatRoom = ({onSetMessages, onSetConnection}) => {
    const [message, setMessage] = useState('');
    const [ws, setWs] = useState([]);
    const [messages, setMessages] = useState([]);

    const onSetWs = (item) => {
        console.log(item);
        setWs (item);
        console.log(ws);
    }
  
    useEffect(() => {
      const connection = CreateConnection(onSetWs);
      connection.connect();
      onSetConnection (connection);
      console.log(ws);
      ws.onmessage = function (event) {
        let userData = JSON.parse(event.data);
        setMessages ((prevMessages) => [...prevMessages, userData.message]);
        onSetMessages (messages);
        console.log ("Message " + userData);
    };
      return () => connection.disconnect();
    }, []);

    return (
        <>
        </>
      );
}

export default ChatRoom