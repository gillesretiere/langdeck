import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Layout from '../components/UI/Layout';

import DomainIterator from "../components/Decks/Domains/DomainIterator";

const Decks = () => {
  const BASE_URL = "http://51.91.8.112:8000/story-deck";
  const {id} = useParams();
  const [decks, setDecks] = useState ('');

  useEffect(()=>{
    fetch(`${BASE_URL}/${id}`)
        .then(response=>response.json())
        .then(json=>{
            setDecks(json)
        })  
        .then()        
  },[]) 

  return (
    <div>
      <Layout>
        <div>
          {decks && <DomainIterator key={decks.language} domains={decks.domains}/>}
        </div>   
      </Layout>

    </div>
  )
}

export default Decks