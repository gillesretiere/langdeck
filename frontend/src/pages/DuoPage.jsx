import React from 'react'
import { useState, useEffect, } from 'react'

import Layout from '../components/UI/Layout';
import DuoLanguageDeck from '../components/Duo/DuoLanguageDeck.jsx';

const BASE_URL = "http://51.91.8.112:8000/langdeck";


const DuoPage = () => {

  const [languages, setLanguages] = useState([]);
  const [inputValue, setInputValue] = React.useState('');

  useEffect(() => {
    fetch(`${BASE_URL}/`)
      .then(response => response.json())
      .then(json => {
        setLanguages(json)
      })
  }, [])

  return (
    <Layout>
      <div>
        <DuoLanguageDeck languages={
          languages.filter(({ lang_name_fr }) => lang_name_fr.toLowerCase().startsWith(inputValue))
          } />
      </div>
    </Layout>

  )
}

export default DuoPage