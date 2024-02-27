import React, {useState} from 'react';
import classes from "./HomeDeck.module.css";
import HomeDeckLanguageSelector from './HomeDeckLanguageSelector';
import HomeDeckChatSelector from './HomeDeckChatSelector';
import LanguageDeck from './LanguageDeck';
import ChatDeck from './ChatDeck';
import ChatRoom from './ChatRoom';


const HomeDeck = ({startingDeck}) => {
  // web sockets
  const [ws, setWs] = useState([]);
  const [messages, setMessages] = useState([]);
  const [availableLanguages, setAvailableLanguages] = useState ([]);
  const [selectedLanguage, setSelectedLanguage] = useState (false);
  const [selectedChatDeck, setSelectedChatDeck] = useState (false);
  const [connected, setConnected] = useState (false);
  const [languageDict, setLanguageDict] = useState ({});
  const [language, setLanguage] = useState ('');
  const [chatDeck, setChatDeck] = useState ('');

  const clickHandlerLanguage = () => {
    setSelectedLanguage (!selectedLanguage);
    if (language) {
      setLanguage ('');
      setSelectedChatDeck (false);
      setChatDeck ('');
    } else {
      // on appelle les ws pour la question/réponse
      const dictLanguages = new Set(startingDeck.map(x => x.language));
      setAvailableLanguages([...dictLanguages]);
      let data = {};  
      data.message = "Bonjour";
      data.language = "unknown";
      data.question_tr = "Choose a language";
      data.question = "Choisir une langue";
      data.options = [...dictLanguages];
      data.audio = "audio";


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

  const onSetMessages = (item) => {
    console.log(item);
    setMessages ((prevMessages) => [...prevMessages,item]);
  }

  const sendMessage = (event) => {
    const dictLanguages = new Set(startingDeck.map(x => x.language));
    console.log(dictLanguages);
    setAvailableLanguages([...dictLanguages]);
    let data = {};  
    data.message = "Bonjour";
    data.language = "unknown";
    data.question_tr = "Choose a language";
    data.question = "Choisir une langue";
    data.options = [...dictLanguages];
    data.audio = "audio";
    ws.send(JSON.stringify(data));
 }


  const onSetConnection = (item) => {
    setWs (item);
    setConnected (true);

  }

  return (
    <>
    <div className={classes.container}>
      <div className={classes.deck_base_container}>
        <HomeDeckLanguageSelector onSetSelected={clickHandlerLanguage} on={selectedLanguage} language={language} language_img={languageDict.lang_flag_icon}/>
        { selectedLanguage && !language && 
          <>
          <ChatRoom options={availableLanguages} onSetMessages={onSetMessages} onSetConnection={onSetConnection}/>
          <LanguageDeck startingDeck={startingDeck} onSetLanguage={onSetLanguage} onSetLanguageDict={onSetLanguageDict}/>
          </>
        }
        { language && <HomeDeckChatSelector onSetSelected={clickHandlerChatDeck} on={selectedChatDeck} language={language} chatDeck={chatDeck}/>}
        { selectedChatDeck && !chatDeck && <ChatDeck language={languageDict.language} startingDeck={startingDeck} onSetChatDeck={onSetChatDeck}/>}
        { chatDeck && <div>Choisir une question</div>}
      </div>
      <div className={classes.deck_flow_container}>
        {connected && 
           <ul className='p-2 text-white text-left mt-4'>
           {messages && <li>{messages[messages.length - 1]}</li>}
       </ul>       
        }
      </div>

    </div>
    </>
  )
}

export default HomeDeck
