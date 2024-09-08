import React, { useState, useEffect, useContext, } from 'react';

import { appContext } from "../App";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Layout from '../components/UI/Layout';
import LanguageDeck from '../components/Decks/Languages/LanguageDeck.jsx';
import classes from "../components/Decks/Languages/LanguageDeckList.module.css";
import pg_classes from "./Pages.module.css";

import DeckContext from "../context/DeckContext";

import { languages_DB } from '../assets/languages/index.js';

const LanguagePage = () => {

  let deckContext = useContext(DeckContext);
  const BASE_URL = deckContext.public_urls['vps_prod'] + deckContext.url_paths['availableLanguages'];

  const menuItems = useContext(appContext);
  const [languages, setLanguages] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [autoComplete, setautoComplete] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [value, setValue] = React.useState(languages[0]);
  const [inputValue, setInputValue] = React.useState('');
  const language_name = languages.map(a => a.lang_name_fr);

  const selectHandler = (selection) => {
    // console.log("From Above " + selection);
    setSelectedLanguage(selection);
    menuItems.translationLanguage = selection;
  };

  useEffect(() => {
    fetch(`${BASE_URL}/`)
      .then(response => response.json())
      .then(json => {
        setLanguages(json)
        setIsPending(false)
      })
  }, []);

  return (
    <Layout>
        {autoComplete && 
        <>
      <div className={pg_classes.page__title}>Sélectionnez un deck d'apprentissage</div>
      <div className={`${classes.search__language}`}>
      <Autocomplete
          disablePortal
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue.toLowerCase());
          }}
          id="combo-box-demo"
          options={language_name}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Language" />}
        /> 
      </div>
      </>
      }
      <div>
        <LanguageDeck languages={
          languages_DB.filter(({ lang_name_fr }) => lang_name_fr.toLowerCase().startsWith(inputValue))
          } />
      </div>
    </Layout>

  )
}

export default LanguagePage