import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import SplitSayneteDeck from '../components/Decks/Saynetes/SplitSayneteDeck';

const SplitSaynetePage = (props) => {

    let ctx = useContext(DeckContext);

    return (
      <Layout>
        <SplitSayneteDeck deck={ctx.saynete}/>
      </Layout>
    )
}

export default SplitSaynetePage