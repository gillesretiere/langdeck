import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import StudyDeck from '../components/Decks/Studies/StudyDeck';

const StudyPage = (props) => {

    let ctx = useContext(DeckContext);

    return (
      <Layout>
        <div>StudyPage</div>
        <StudyDeck deck={ctx.deck}/>
      </Layout>
    )
}

export default StudyPage