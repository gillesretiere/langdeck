import React, {useState} from 'react';
import classes from "./HomeDeck.module.css";
import HomeDeckCard from './HomeDeckCard';
import ChatDeckCard from './ChatDeckCard';
import LanguageDeck from './LanguageDeck';

const HomeDeck = ({startingDeck}) => {
  const [selectedLanguage, setSelectedLanguage] = useState (false);
  const [selectedChatDeck, setSelectedChatDeck] = useState (false);
  const [connected, setConnected] = useState (false);
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

  const onSetChatDeck = (item) => {
    setChatDeck (item);
  }

  return (
    <>
    <div className={classes.container}>
      <div className={classes.deck_base_container}>
        <HomeDeckCard onSetSelected={clickHandlerLanguage} on={selectedLanguage} language={language}/>
        { selectedLanguage && !language && <LanguageDeck startingDeck={startingDeck} onSetLanguage={onSetLanguage}/>}
        { language && !chatDeck && <ChatDeckCard onSetSelected={clickHandlerChatDeck} on={selectedChatDeck} language={language} chatDeck={chatDeck}/>}
        { selectedChatDeck && !chatDeck && <LanguageDeck startingDeck={startingDeck} onSetLanguage={onSetLanguage}/>}
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
