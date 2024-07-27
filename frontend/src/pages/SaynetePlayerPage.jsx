
import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import SaynetePlayerList from '../components/Decks/Saynetes/SaynetePlayerList';
import classes from "./Pages.module.css";

const SaynetePlayerPage = () => {
    
  let ctx = useContext(DeckContext);
  const lang_img = ctx.current_deck.language_deck.lang_flag_icon;
  console.log (ctx.saynete_phrases);
  return (
    <Layout>
        <SaynetePlayerList phrase_deck={ctx.saynete_phrases} img={lang_img}></SaynetePlayerList>
    </Layout>
  )
}

export default SaynetePlayerPage