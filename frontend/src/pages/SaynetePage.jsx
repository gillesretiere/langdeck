import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import SayneteDeck from '../components/Decks/Saynetes/SayneteDeck';

const SaynetePage = (props) => {

    let ctx = useContext(DeckContext);

    return (
      <Layout>
        <SayneteDeck deck={ctx.saynete}/>
      </Layout>
    )
}

export default SaynetePage