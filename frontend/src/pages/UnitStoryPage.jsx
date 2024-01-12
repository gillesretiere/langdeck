
import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import UnitStoryDeckList from '../components/Decks/Stories/UnitStoryDeckList';
import classes from "./Pages.module.css";

const UnitStoryPage = () => {
    
  let ctx = useContext(DeckContext);
  console.log(ctx);
  const lang_img = ctx.current_deck.language_deck.lang_flag_icon;
  return (
    <Layout>
        <div className={classes.page__title}>Sélectionnez une leçon</div>
        <div className={classes.page__subtitle}>1 leçon = 1 saynète, 1 renforcement et 1 quiz </div>
        <UnitStoryDeckList unit={ctx.unit} img={lang_img}></UnitStoryDeckList>
    </Layout>
  )
}

export default UnitStoryPage