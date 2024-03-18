import React,  { useState, useContext } from 'react'; 
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import SaynetePlayComponent from '../components/Decks/Saynetes/SaynetePlayComponent';


const SaynetePlayPage = () => {
    let ctx = useContext(DeckContext);
    let deck = ctx.saynete_phrases;
    ctx.current_deck.progression_1=deck;

    return (
        <div>
            <Layout>
                <SaynetePlayComponent deck={deck}></SaynetePlayComponent>
            </Layout>
        </div>
    )
}

export default SaynetePlayPage