import React,  { useState, useContext } from 'react'; 
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import StudyComponent from '../components/Decks/Studies/StudyComponent';


const StudyPlayPage = () => {
    let ctx = useContext(DeckContext);
    return (
        <div>
            <Layout>
                <StudyComponent deck={ctx.study}></StudyComponent>
            </Layout>
        </div>
    )
}

export default StudyPlayPage