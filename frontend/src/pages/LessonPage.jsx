import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import SayneteDeck from '../components/Decks/Saynetes/SayneteDeck';
import LessonDeckCard from '../components/Decks/Lessons/LessonDeckCard';
import LessonDeckList from '../components/Decks/Lessons/LessonDeckList';

const LessonPage = () => {
    
    let ctx = useContext(DeckContext);
    // console.log(ctx);

    return (
        <Layout>
            <div>Lesson Page</div>
            <LessonDeckList deck={ctx.deck}></LessonDeckList>
        </Layout>
    )

}

export default LessonPage