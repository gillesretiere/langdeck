import React, { useState } from 'react';
/*
 This global entry component is not used, specific routes components are used instead.
*/
import DeckContext from './context/DeckContext';

export const appContext = React.createContext({
    theme: 'lightTheme',
    translationLanguage:'all',
    selectedScene: '',
    setSelectedScene: (scene) => {}
  });
  

function App() {
    <appContext.Provider>
      <DeckContext.Provider
            value={{
              deck: '',
              language: 'all'
            }}>
        return (
        <>
            This is the App
        </>
        );
      </DeckContext.Provider>
    </appContext.Provider>
}

export default App;
