import React, { useState, useEffect, useContext, } from 'react';
import { useParams } from "react-router-dom";
import AutoComplete from '../components/UI/AutoComplete';
import ThemeDeck from '../components/Decks/Themes/ThemeDeck';
import Layout from '../components/UI/Layout';
import classes from "./Pages.module.css";
import DeckContext from "../context/DeckContext";

const ThemePage = () => {

  let deckContext = useContext(DeckContext);
  const BASE_URL = deckContext.public_urls['vps_prod'] + deckContext.url_paths['availableThemes'];

  const {id} = useParams();
  const [decks, setDecks] = useState ('');
  const [autoComplete, setautoComplete] = useState(false);
  const [value, setValue] = useState(decks[0]);
  const [inputValue, setInputValue] = useState('');

  const skipLevels = (json) => {
    let data = json;
    // console.log(data);
    return data;
  };


  useEffect(()=>{
    fetch(`${BASE_URL}/${id}`)
        .then(response=>response.json())
        .then(json=>{
            setDecks(skipLevels(json));     
        })  
        .then()        
  },[]) 

  const setValueHandler = (newValue) => {
    setValue(newValue);
  };

  const setInputValueHandler = (newInputValue) => {
    setInputValue(newInputValue);
  };

  return (
    <Layout>
      {autoComplete && 
        <>
        <div className={classes.page__title}>Sélectionnez un thème</div>
        {decks && <AutoComplete options={decks.themes.map(a => a.theme_name)} value={value} inputValue={inputValue} setValue={setValueHandler} setInputValue={setInputValueHandler}/>}
        </>
      }
        <div>
            {decks && <ThemeDeck themes={decks.themes.filter(({theme_name}) => theme_name.toLowerCase().startsWith(inputValue))} img={decks.lang_flag_icon}/>}
        </div>        
  </Layout>
  )
}

export default ThemePage