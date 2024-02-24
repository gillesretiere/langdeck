import React, {useState} from 'react';
import classes from "./HomeDeck.module.css";
import HomeDeckLanguageSelector from './HomeDeckLanguageSelector';
import HomeDeckChatSelector from './HomeDeckChatSelector';
import LanguageDeck from './LanguageDeck';
import ChatDeck from './ChatDeck';

const HomeDeck = ({startingDeck}) => {
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

  return (
    <>
    <div className={classes.container}>
      <div className={classes.deck_base_container}>
        <HomeDeckLanguageSelector onSetSelected={clickHandlerLanguage} on={selectedLanguage} language={language}/>
        { selectedLanguage && !language && <LanguageDeck startingDeck={startingDeck} onSetLanguage={onSetLanguage} onSetLanguageDict={onSetLanguageDict}/>}
        { language && <HomeDeckChatSelector onSetSelected={clickHandlerChatDeck} on={selectedChatDeck} language={language} chatDeck={chatDeck}/>}
        { selectedChatDeck && !chatDeck && <ChatDeck language={languageDict.language} startingDeck={startingDeck} onSetChatDeck={onSetChatDeck}/>}
      </div>
      {connected && 
        <div className={classes.right_container}>
          <div>Conversation {language}</div>
        </div> 
      }
    </div>
    </>
  )
}

export default HomeDeck
