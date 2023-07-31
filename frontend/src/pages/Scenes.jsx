import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import SceneDeck from '../components/Decks/Scenes/SceneDeck';

const Scenes = (props) => {

    let ctx = useContext(DeckContext);
    console.log(ctx);    
    const deck = ctx.deck;

  return (
    <Layout>
      <SceneDeck deck={deck}/>
    </Layout>
  )
}

export default Scenes