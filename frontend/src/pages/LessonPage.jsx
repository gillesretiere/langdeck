import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import SayneteDeck from '../components/Decks/Saynetes/SayneteDeck';
import LessonDeck from '../components/Decks/Lessons/LessonDeck';

const LessonPage = () => {
    
    let ctx = useContext(DeckContext);

    return (
        <Layout>
            <div>LessonPage</div>
            <LessonDeck deck={ctx.deck}/>
        </Layout>
    )

}

export default LessonPage