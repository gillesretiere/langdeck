import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import QuizDeck from '../components/Decks/Quiz/QuizDeck';

const QuizPage = (props) => {

    let ctx = useContext(DeckContext);

    return (
      <Layout>
        <div>QuizPage</div>
        <QuizDeck deck={ctx.deck}/>
      </Layout>
    )
}

export default QuizPage