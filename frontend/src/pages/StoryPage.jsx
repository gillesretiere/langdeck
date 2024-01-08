import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import AutoComplete from '../components/UI/AutoComplete';
import StoryDeck from '../components/Decks/Stories/StoryDeck';

import Layout from '../components/UI/Layout';

const BASE_URL = "http://51.91.8.112:8000/storydeck";


const StoryPage = () => {

  const {id} = useParams();
  const [decks, setDecks] = useState ('');

  const [value, setValue] = useState(decks[0]);
  const [inputValue, setInputValue] = useState('');

  const skipLevels = (json) => {
    let data = json;
    // console.log(data);
    return data;
  };

  console.log(decks);
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
        <div>StoryPage</div>
        {decks && <AutoComplete options={decks.stories.map(a => a.story)} value={value} inputValue={inputValue} setValue={setValueHandler} setInputValue={setInputValueHandler}/>}
        <div>
            {decks && <StoryDeck scenes={decks.stories.filter(({story}) => story.toLowerCase().startsWith(inputValue))} img={decks.lang_flag_icon}/>}
        </div>
  </Layout>
  )
}

export default StoryPage