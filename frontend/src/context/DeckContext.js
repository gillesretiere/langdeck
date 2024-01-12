import React from 'react'

const DeckContext = React.createContext({
    deck: {language_deck :'', theme_deck : ''},
    current_deck : {language_deck :'', theme_deck : '', unit_theme : '', story_deck:''},
});

export default DeckContext;