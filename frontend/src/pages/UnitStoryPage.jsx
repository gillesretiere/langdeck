
import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import UnitStoryDeckList from '../components/Decks/Stories/UnitStoryDeckList';

const UnitStoryPage = () => {
    
  let ctx = useContext(DeckContext);
  console.log(ctx);
  const lang_img = ctx.language_deck.lang_flag_icon;
  return (
    <Layout>
        <div>Unit Story Page</div>
        <UnitStoryDeckList unit={ctx.unit} img={lang_img}></UnitStoryDeckList>
    </Layout>
  )
}

export default UnitStoryPage