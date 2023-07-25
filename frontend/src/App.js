import React, { useState } from 'react';
/*
 This global entry component is not used, specific routes components are used instead.
*/

export const AppContext = React.createContext({
    selectedLanguage: 'Français'
});

function App() {
      return (
      <>
          This is the App
      </>
      );
}

export default App;
