import React from 'react'
import Layout from '../components/UI/Layout'
import LanguageDeckCard from "../components/LanguageDeckCard"
import SwitchMode from "../components/SwitchMode";
import SelectLanguage from '../components/UI/SelectLanguage';

import {useState, useEffect,useContext} from 'react'

let BASE_URL = "http://51.91.8.112:8000/language-deck"

const LanguageDeck = () => {
  let [languages, setLanguages] = useState([])
  let [isPending, setIsPending] = useState(true) 
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(()=>{
    fetch(`${BASE_URL}/`)
        .then(response=>response.json())
        .then(json=>{
          setLanguages(json)
          setIsPending(false)
        })     
    },[]) 

  return (
    <>
    <Layout>
        <div className="mx-8">     
          {!selectedLanguage && (
        <SelectLanguage
        title="Choose language"
        languages={languages}
        selection={selectedLanguage}
        message="Message here"
      />
          )}            
          {isPending}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {languages && languages.map (
              (el) => {
                return(<LanguageDeckCard key={el._id} language_deck={el}/>)
              }
            )
            }
            </div>
            <SwitchMode></SwitchMode>
        </div> 
    </Layout>
    </>
  )
}

export default LanguageDeck