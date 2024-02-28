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

      ws.onopen = function () {
        let data = {};  
        data.message = "Bonjour";
        data.language = "unknown";
        data.question_tr = "Choose a language";
        data.question = "Choisir une langue";
        options = [{"option":"Néerlandais", "option_translation":"Nederlands", "option_audio_url":"http://res.cloudinary.com/dhc7ovnwk/video/upload/v1706194213/langdeck/assets/audio/ai/dut/recRHxizdSZgCmVWW-dut.mp3"},
                   {"option":"Anglais", "option_translation":"English", "option_audio_url":"http://res.cloudinary.com/dhc7ovnwk/video/upload/v1706194213/langdeck/assets/audio/ai/dut/recRHxizdSZgCmVWW-dut.mp3"},
                   {"option":"Allemand", "option_translation":"Deutsch", "option_audio_url":"http://res.cloudinary.com/dhc7ovnwk/video/upload/v1706194213/langdeck/assets/audio/ai/dut/recRHxizdSZgCmVWW-dut.mp3"},
                   {"option":"Italien", "option_translation":"Italiano", "option_audio_url":"http://res.cloudinary.com/dhc7ovnwk/video/upload/v1706194213/langdeck/assets/audio/ai/dut/recRHxizdSZgCmVWW-dut.mp3"},
                  ]
        data.options = options;
        data.audio = "http://res.cloudinary.com/dhc7ovnwk/video/upload/v1706194213/langdeck/assets/audio/ai/dut/recRHxizdSZgCmVWW-dut.mp3";      
        setMessages ((prevMessages) => [...prevMessages, data.question]);
        onSetMessages (data.question);
        ws.send(JSON.stringify(data));
      };     

      ws.onmessage = function (event) {
        let userData = JSON.parse(event.data);
        setMessages ((prevMessages) => [...prevMessages, userData.option]);
        onSetMessages (userData.option);
    };
      return;
    }, [cnx]);

    return (
        <>
        </>
      );
}

export default ChatRoom