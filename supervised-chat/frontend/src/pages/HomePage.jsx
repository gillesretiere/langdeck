import React from 'react';
import { useState, useEffect } from 'react';

import Layout from '../components/UI/Layout';
import HomeDeck from '../components/HomeDeck';
import HomeDeckCnxWS from '../components/HomeDeckCnxWS';

/* route principale côté serveur FastAPI */
const BASE_URL = "http://51.91.8.112:4455/tschat";

const HomePage = () => {
  const [startingDeck, setStartingDeck] = useState ('');

  const fromJSON = (json) => {
    let data = json;
    console.log(data);
    return data;
  };

  useEffect(()=>{
    fetch(`${BASE_URL}/`)
        .then(response=>response.json())
        .then(json=>{
          setStartingDeck(fromJSON(json));     
        })  
        .then()        
  },[]) 

  return (
    <div>
        <Layout>
          {startingDeck && <HomeDeckCnxWS startingDeck={startingDeck}/>} 
        </Layout>
    </div>
  )
}

export default HomePage