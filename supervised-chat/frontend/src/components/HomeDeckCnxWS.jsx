import React, {useState, useEffect} from 'react';
import classes from "./HomeDeck.module.css";
import HomeDeckLanguageSelector from './HomeDeckLanguageSelector';
import HomeDeckChatSelector from './HomeDeckChatSelector';
import LanguageDeck from './LanguageDeck';
import ChatDeck from './ChatDeck';

const HomeDeckCnxWS = ({startingDeck}) => {
  // web sockets
  const [ws, setWs] = useState([]);
  const [messages, setMessages] = useState([]);
  const [clients, setClients] = useState([]);

  const [selectedLanguage, setSelectedLanguage] = useState (false);
  const [selectedChatDeck, setSelectedChatDeck] = useState (false);
  const [connected, setConnected] = useState (false);
  const [languageDict, setLanguageDict] = useState ({});
  const [language, setLanguage] = useState ('');
  const [chatDeck, setChatDeck] = useState ('');

  const userName = "Gilles";

  const sendMessage = (event) => {
    let data = {};  
     
    data.message = "Bonjour";
    data.language = "Russe";
    data.question_tr = "Question (tr)";
    data.question = "Question (fr)"
    data.options = "options"
    data.audio = "audio"

    ws.send(JSON.stringify(data));
 }

  useEffect ( () => {
    let socket = new WebSocket(`ws://51.91.8.112:4455/ws/a/${userName}`);
    setWs (socket);
    setConnected (true);
    socket.onmessage = function (event) {
        let userData = JSON.parse(event.data);
        setMessages ((prevMessages) => [...prevMessages, userData.message]);
        let client_ids = [...userData.client_ids];
        setClients(client_ids);
    };
}, [connected, ]);

  const clickHandlerLanguage = () => {
    setSelectedLanguage (!selectedLanguage);
    if (language) {
      setLanguage ('');
      setSelectedChatDeck (false);
      setChatDeck ('');
    }
  }

  const clickHandlerChatDeck = () => {
    setSelectedChatDeck (!selectedChatDeck);
    if (chatDeck) {
      setChatDeck ('');
    }
  }

  const onSetLanguage = (item) => {
    setLanguage (item);
  }

  const onSetLanguageDict = (item) => {
    setLanguageDict (item);
  }

  const onSetChatDeck = (item) => {
    setChatDeck (item);
  }

  const onSetCnx = () => {
    setConnected (true);
  }

  return (
    <>
    <div className={classes.container}>
      <div className={classes.deck_base_container}>
        <HomeDeckLanguageSelector onSetSelected={clickHandlerLanguage} on={selectedLanguage} language={language} language_img={languageDict.lang_flag_icon}/>
        { selectedLanguage && !language && <LanguageDeck startingDeck={startingDeck} onSetLanguage={onSetLanguage} onSetLanguageDict={onSetLanguageDict}/>}
        { language && <HomeDeckChatSelector onSetSelected={clickHandlerChatDeck} on={selectedChatDeck} language={language} chatDeck={chatDeck}/>}
        { selectedChatDeck && !chatDeck && <ChatDeck language={languageDict.language} startingDeck={startingDeck} onSetChatDeck={onSetChatDeck}/>}
        { chatDeck && <div>Choisir une question</div>}
      </div>
      {connected && 
        <div className={classes.right_container}>
          <div>Conversation {language}</div>
          <div>
            <button className='bg-red-400 w-full p-2 mt-2 rounded text-white' onClick={onSetCnx}>
              Cnx
            </button>            
            <button className='bg-red-400 w-full p-2 mt-2 rounded text-white' onClick={sendMessage}>
              Send
            </button>
            <ul className='p-2 text-gray-500 text-left mt-4 bg-gray-200'>
                        {messages.map ((message, index) => {
                            return <li key={index}>{message}</li>;
                        }
                        )}

                    </ul>            
          </div>                    
        </div> 
      }
    </div>
    </>
  )
}

export default HomeDeckCnxWS
