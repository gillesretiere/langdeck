import React, { useContext } from 'react';
import DeckContext from "../context/DeckContext";
import Layout from '../components/UI/Layout';
import DuoChatStepDeck from '../components/Duo/DuoChatStepDeck';

const DuoStepSendPage = () => {
    let ctx = useContext(DeckContext);
    let conversation = ctx.current_deck.chat_deck;

    return (
        <Layout>
            <div>
                CHAT
            </div>        
        </Layout>
    )
}

export default DuoStepSendPage