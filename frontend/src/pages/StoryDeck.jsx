import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import AutoComplete from '../components/UI/AutoComplete';
import SceneDeckCardIterator from '../components/Decks/Scenes/SceneDeckCardIterator';
import Layout from '../components/UI/Layout';

const BASE_URL = "http://51.91.8.112:8000/storydeck";


const StoryDeck = () => {

  const {id} = useParams();
  const [decks, setDecks] = useState ('');

  const [value, setValue] = useState(decks[0]);
  const [inputValue, setInputValue] = useState('');

  const skipLevels = (json) => {
    let data = json;
    console.log(data);
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
        {decks && <AutoComplete options={decks.stories.map(a => a.story)} value={value} inputValue={inputValue} setValue={setValueHandler} setInputValue={setInputValueHandler}/>}
        <div>
            {decks && <SceneDeckCardIterator scenes={decks.stories.filter(({story}) => story.toLowerCase().startsWith(inputValue))} />}
        </div>
  </Layout>
  )
}

export default StoryDeck