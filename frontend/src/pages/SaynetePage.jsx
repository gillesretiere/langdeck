import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import SayneteDeck from '../components/Decks/Saynetes/SayneteDeck';

const SaynetePage = (props) => {

    let ctx = useContext(DeckContext);
    console.log(ctx);    
    const deck = ctx.deck;

  return (
    <Layout>
      <SayneteDeck deck={deck}/>
    </Layout>
  )
}

export default SaynetePage