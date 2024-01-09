
import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import UnitStoryX3Deck from '../components/Decks/Stories/UnitStoryX3Deck';

const UnitStoryX3Page = () => {
    
  let ctx = useContext(DeckContext);
  console.log(ctx);
  const lang_img = ctx.language_deck.lang_flag_icon;
  return (
    <Layout>
        <UnitStoryX3Deck unit_story={ctx.story.unit_story} lang_img={lang_img}></UnitStoryX3Deck>
    </Layout>
  )
}

export default UnitStoryX3Page