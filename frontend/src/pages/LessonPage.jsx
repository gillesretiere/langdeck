import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import SayneteDeck from '../components/Decks/Saynetes/SayneteDeck';
import LessonDeckCard from '../components/Decks/Lessons/LessonDeckCard';

const LessonPage = () => {
    
    let ctx = useContext(DeckContext);

    return (
        <Layout>
            <div>Lesson Page</div>
            <LessonDeckCard deck={ctx.deck}/>
        </Layout>
    )

}

export default LessonPage