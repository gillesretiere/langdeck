import React from 'react'
import Layout from '../components/Layout'
import LanguageDeckCard from "../components/LanguageDeckCard"
import DarkLightModeToggle from "../components/DarkLightModeToggle"

import {useState, useEffect,useContext} from 'react'
import Button from '@mui/material/Button';

let BASE_URL = "http://51.91.8.112:8000/language-deck"

const LanguageDeck = () => {
  let [languages, setLanguages] = useState([])
  let [isPending, setIsPending] = useState(true) 

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
          {isPending}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {languages && languages.map (
              (el) => {
                return(<LanguageDeckCard key={el._id} language_deck={el}/>)
              }
            )
            }
            </div>
            <DarkLightModeToggle/>
            <Button variant="contained">Hello World</Button>
        </div> 
    </Layout>
    </>
  )
}

export default LanguageDeck