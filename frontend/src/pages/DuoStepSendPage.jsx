import React, { useContext } from 'react';
import DeckContext from "../context/DeckContext";
import Layout from '../components/UI/Layout';
import DuoChatStepSendDeck from '../components/Duo/DuoChatStepSendDeck';

const DuoStepSendPage = () => {
    let ctx = useContext(DeckContext);
    let conversation = ctx.current_deck.chat_deck;
    let step = ctx.current_deck.chat_step_deck;

    return (
        <Layout>
            <div>
                <DuoChatStepSendDeck />
            </div>        
        </Layout>
    )
}

export default DuoStepSendPage