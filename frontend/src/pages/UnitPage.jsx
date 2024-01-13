import React, { useContext, useState } from 'react';
import AutoComplete from '../components/UI/AutoComplete';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import UnitDeck from '../components/Decks/Units/UnitDeck';
import UnitDeckList from '../components/Decks/Units/UnitDeckList';
import classes from "./Pages.module.css";

const UnitPage = () => {
  
  const [autoComplete, setautoComplete] = useState(false);
  
  let ctx = useContext(DeckContext);
  let lang_flag_icon = ctx.current_deck.language_deck.lang_flag_icon;
  let theme = ctx.theme;
  return (
    <Layout>      
        <UnitDeck deck={ctx.deck}></UnitDeck>
    </Layout>
  )
}

export default UnitPage