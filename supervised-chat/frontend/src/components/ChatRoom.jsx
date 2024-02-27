import React, {useEffect, useState, } from 'react'
import { CreateConnection } from './CreateConnection';

const ChatRoom = ({options, onSetMessages, onSetConnection}) => {
    const [message, setMessage] = useState('');
    const [ws, setWs] = useState([]);
    const [cnx, setCnx] = useState(false);
    const [messages, setMessages] = useState([]);

    const onSetWs = (item) => {
        setCnx (true);
        setWs (item);
        console.log(ws);     
    }
  
    useEffect(() => {
      const connection = CreateConnection(onSetWs);
      connection.connect();
      onSetConnection (ws);
      console.log(ws);

      ws.onopen = function () {
        alert("connected");
        let data = {};  
        data.message = "Bonjour";
        data.language = "unknown";
        data.question_tr = "Choose a language";
        data.question = "Choisir une langue";
        console.log(options);
        data.audio = "http://res.cloudinary.com/dhc7ovnwk/video/upload/v1706194213/langdeck/assets/audio/ai/dut/recRHxizdSZgCmVWW-dut.mp3";        
        ws.send(JSON.stringify(data));
      };     

      ws.onmessage = function (event) {
        let userData = JSON.parse(event.data);
        setMessages ((prevMessages) => [...prevMessages, userData.message]);
        onSetMessages (userData.message);
        console.log (userData);
    };
      return;
    }, [cnx]);

    return (
        <>
        </>
      );
}

export default ChatRoom