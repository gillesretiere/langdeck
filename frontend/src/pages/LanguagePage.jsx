import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { appContext } from "../App";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Layout from '../components/UI/Layout';
import LanguageDeck from '../components/Decks/Languages/LanguageDeck.jsx';
import classes from "../components/Decks/Languages/LanguageDeckList.module.css";

const BASE_URL = "http://51.91.8.112:8000/langdeck";


const LanguagePage = () => {

  const menuItems = useContext(appContext);
  const [languages, setLanguages] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [value, setValue] = React.useState(languages[0]);
  const [inputValue, setInputValue] = React.useState('');
  const language_name = languages.map(a => a.lang_name_fr);

  const selectHandler = (selection) => {
    console.log("From Above " + selection);
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
  }, [])

  return (
    <Layout>
      <div>LanguageDeck</div>
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
      <div>
        <LanguageDeck languages={
          languages.filter(({ lang_name_fr }) => lang_name_fr.toLowerCase().startsWith(inputValue))
          } />
      </div>
    </Layout>

  )
}

export default LanguagePage