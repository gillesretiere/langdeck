
import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import UnitStoryDeckList from '../components/Decks/Stories/UnitStoryDeckList';
import classes from "./Pages.module.css";

const UnitStoryPage = () => {
    
  let ctx = useContext(DeckContext);
  const lang_img = ctx.current_deck.language_deck.lang_flag_icon;
  return (
    <Layout>
        <UnitStoryDeckList unit={ctx.unit} img={lang_img}></UnitStoryDeckList>
    </Layout>
  )
}

export default UnitStoryPage