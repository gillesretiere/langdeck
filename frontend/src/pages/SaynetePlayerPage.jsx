
import React, { useContext, useState, useEffect, } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import SaynetePlayerList from '../components/Decks/Saynetes/SaynetePlayerList';

import classes from "./Pages.module.css";



const SaynetePlayerPage = ({}) => {

  let deckContext = useContext(DeckContext);
  /*
  on récupère le story_translat°_id (st_id) à transmettre au routeur
  */
  const location = useLocation();
  const st_id = location.pathname.split("/")[2];
  const BASE_URL = deckContext.public_urls['vps_prod'] + deckContext.url_paths['availableStories'] + "/" + st_id;

  const [decks, setDecks] = useState ([]);
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
      <SaynetePlayerList phrase_deck={deckContext.saynete_phrases} img={lang_img} decks={decks} id={st_id}></SaynetePlayerList>
    </Layout>
  )
}

export default SaynetePlayerPage