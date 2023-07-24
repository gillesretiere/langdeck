import React from 'react'
import Layout from '../components/UI/Layout'
import LanguageDeckCard from "../components/LanguageDeckCard"
import SelectLanguage from '../components/UI/SelectLanguage';
import LanguageDeckList from '../components/Decks/Languages/LanguageDeckList.jsx';

import { useState, useEffect, useContext } from 'react'

let BASE_URL = "http://51.91.8.112:8000/language-deck"

const Languages = () => {
  let [languages, setLanguages] = useState([])
  let [isPending, setIsPending] = useState(true)
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const selectHandler = (selection) => {
    console.log("From Above " + selection);
    setSelectedLanguage(selection);
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
        <div className="mx-8">
          {!selectedLanguage && (
            <SelectLanguage
              title="Choose language"
              languages={languages}
              selection={selectedLanguage}
              message="Message here"
              onSelect={selectHandler}
            />
          )}
        <LanguageDeckList languages={languages}/>    

        </div>
      </Layout>
  )
}

export default Languages