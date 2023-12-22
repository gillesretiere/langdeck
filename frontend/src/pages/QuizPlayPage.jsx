import React,  { useState, useContext } from 'react'; 
import Layout from '../components/UI/Layout';
import QuizComponent from '../components/Decks/Quiz/QuizComponent';
import DeckContext from "../context/DeckContext";


const QuizPlayPage = () => {
    
    let ctx = useContext(DeckContext);
    return (
        <div>
            <Layout>
                <QuizComponent quiz={ctx.quiz}/>
            </Layout>
        </div>
    )
}

export default QuizPlayPage