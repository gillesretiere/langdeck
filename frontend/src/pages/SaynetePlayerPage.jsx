
import React, { useContext, useState, useEffect, } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import SaynetePlayerList from '../components/Decks/Saynetes/SaynetePlayerList';

import classes from "./Pages.module.css";



const SaynetePlayerPage = ({ }) => {

  const deckContext = useContext(DeckContext);
  const stories = deckContext.live_deck;
  /*
  on récupère le story_translat°_id (st_id) à transmettre au routeur
  */
  const location = useLocation();
  const st_id = location.pathname.split("/")[2];
  const lang_img = deckContext.current_deck.language_deck.lang_flag_icon;

  return (
    <Layout>
      {stories &&
        <SaynetePlayerList img={lang_img} id={st_id} stories={stories}></SaynetePlayerList>
      }
    </Layout>
  )
}

export default SaynetePlayerPage