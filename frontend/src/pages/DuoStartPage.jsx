import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import DuoChatDeck from '../components/Duo/DuoChatDeck';

import Layout from '../components/UI/Layout';


const BASE_URL = "http://51.91.8.112:8000/chatdeck";


const DuoStartPage = () => {

  const {id} = useParams();
  const [decks, setDecks] = useState ('');
  const [inputValue, setInputValue] = useState('');

  const fromJSON = (json) => {
    let data = json;
    return data;
  };


  useEffect(()=>{
    fetch(`${BASE_URL}/${id}`)
        .then(response=>response.json())
        .then(json=>{
            setDecks(fromJSON(json));     
        })  
        .then()        
  },[]) 

  return (
    <Layout>
        <div>
            {decks && <DuoChatDeck chats={decks.chats} img={decks.lang_flag_icon}/>}
        </div>        
  </Layout>
  )
}

export default DuoStartPage