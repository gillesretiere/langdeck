import React, { useContext } from 'react';
import AutoComplete from '../components/UI/AutoComplete';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import UnitDeck from '../components/Decks/Units/UnitDeck';
import UnitDeckList from '../components/Decks/Units/UnitDeckList';
import classes from "./Pages.module.css";

const UnitPage = () => {
    
  let ctx = useContext(DeckContext);
  let lang_flag_icon = ctx.language_deck.lang_flag_icon;
  let theme = ctx.theme;
  return (
    <Layout>      
        <div className={classes.page__title}>Sélectionnez un sujet</div>
        <UnitDeck deck={ctx.deck}></UnitDeck>
    </Layout>
  )
}

export default UnitPage