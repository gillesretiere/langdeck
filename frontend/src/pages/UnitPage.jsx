import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import UnitDeckList from '../components/Decks/Units/UnitDeckList';

const UnitPage = () => {
    
  let ctx = useContext(DeckContext);
  return (
    <Layout>
        <div>Unit Page</div>
        <UnitDeckList deck={ctx.deck}></UnitDeckList>
    </Layout>
  )
}

export default UnitPage