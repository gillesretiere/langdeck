import React from 'react';

import { useState, useEffect, useContext } from 'react'
import { appContext } from "../App";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Layout from '../components/UI/Layout';
import LanguageDeckList from '../components/Decks/Languages/LanguageDeckList.jsx';
import classes from "../components/Decks/Languages/LanguageDeckList.module.css";

const BASE_URL = "http://51.91.8.112:8000/language-deck";

const Languages = () => {

  const menuItems = useContext(appContext);
  const [languages, setLanguages] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [value, setValue] = React.useState(languages[0]);
  const [inputValue, setInputValue] = React.useState('');
  const language_name = languages.map(a => a.language_name_fr);

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
        <LanguageDeckList languages={
          languages.filter(({ language_name_fr }) => language_name_fr.toLowerCase().startsWith(inputValue))
          } />
      </div>
    </Layout>
  )
}

export default Languages