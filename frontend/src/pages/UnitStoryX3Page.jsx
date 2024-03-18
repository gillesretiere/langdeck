
import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import UnitStoryX3Deck from '../components/Decks/Stories/UnitStoryX3Deck';
import UnitStorySayneteDeck from '../components/Decks/Stories/UnitStorySayneteDeck';

const UnitStoryX3Page = () => {
    
  let ctx = useContext(DeckContext);
  const lang_img = ctx.current_deck.language_deck.lang_flag_icon;
  return (
    <Layout>
        <UnitStorySayneteDeck saynete={ctx.story.unit_story} lang_img={lang_img}></UnitStorySayneteDeck>
        {/*<UnitStoryX3Deck unit_story={ctx.story.unit_story} lang_img={lang_img}></UnitStoryX3Deck>*/}
    </Layout>
  )
}

export default UnitStoryX3Page