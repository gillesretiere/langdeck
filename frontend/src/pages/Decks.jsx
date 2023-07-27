import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import AutoComplete from '../components/UI/AutoComplete';

import Layout from '../components/UI/Layout';

import DomainIterator from "../components/Decks/Domains/DomainIterator";

const Decks = () => {
  const BASE_URL = "http://51.91.8.112:8000/story-deck";
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
        {decks && <AutoComplete options={decks.domains.map(a => a.domain)} value={value} inputValue={inputValue} setValue={setValueHandler} setInputValue={setInputValueHandler}/>}
        <div>
          {decks && <DomainIterator key={decks.language} domains={decks.domains.filter(({ domain }) => domain.toLowerCase().startsWith(inputValue))}/>}
        </div>   
      </Layout>
  )
}

export default Decks