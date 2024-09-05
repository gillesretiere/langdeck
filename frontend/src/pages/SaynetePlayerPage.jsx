
import React, { useContext, useState, useEffect, } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import SaynetePlayerList from '../components/Decks/Saynetes/SaynetePlayerList';

import classes from "./Pages.module.css";



const SaynetePlayerPage = ({}) => {

  let deckContext = useContext(DeckContext);
  const location = useLocation();
  const tid = location.pathname.split("/")[2];
  console.log(tid);
  const BASE_URL = deckContext.public_urls['vps_prod'] + deckContext.url_paths['availableStories'] + "/" + tid;

  const [decks, setDecks] = useState ([]);
  let ctx = useContext(DeckContext);
  const lang_img = deckContext.current_deck.language_deck.lang_flag_icon;

  useEffect(() => {
    fetch(`${BASE_URL}/`)
      .then(response => response.json())
      .then(json => {
        setDecks(json)
      })
  }, [])

  return (
    <Layout>
      <SaynetePlayerList phrase_deck={ctx.saynete_phrases} img={lang_img} decks={decks} ></SaynetePlayerList>
    </Layout>
  )
}

export default SaynetePlayerPage