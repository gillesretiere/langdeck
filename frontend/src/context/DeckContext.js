import React from 'react'

const DeckContext = React.createContext({
    deck: {language_deck :'', theme_deck : ''},
    current_deck : {language_deck :'', theme_deck : '', unit_theme : '', story_deck:'', progression_1:''},
    progression_1_state : '0',
    available_languages : {'fre': false, 'dut': false, 'eng':true, 'ger': false, 'rus':true, 'ams':true, 'rom':true},
    available_stories : {'rec7lQw6DtIJP45dn': true, 'rec4nBx7PmDA3Y7Ji': true, 'reclNHMgbbYroSaNq': true},
    public_urls : {'vps_prod':'http://51.195.103.17:8000/', },
    url_paths : {'availableLanguages':'langdeck', 'availableThemes':'themesdeck'},
    drawer_navlinks : [],
});

export default DeckContext;