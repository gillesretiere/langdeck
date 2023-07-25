import React, { useState } from 'react';
/*
 This global entry component is not used, specific routes components are used instead.
*/

export const appContext = React.createContext({
    theme: 'lightTheme',
    translationLanguage:'all'
  });
  

function App() {
    <appContext.Provider>
      return (
      <>
          This is the App
      </>
      );
    </appContext.Provider>
}

export default App;
