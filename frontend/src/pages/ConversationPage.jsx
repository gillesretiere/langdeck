import React, { useContext } from 'react';
import DeckContext from "../context/DeckContext";
import Layout from '../components/UI/Layout';

import Conversation from '../components/UI/Chat/Conversation';

const ConversationPage = () => {
    let ctx = useContext(DeckContext);

    return (
        <div>
            <Layout>
                <Conversation deck={ctx.saynete}></Conversation>
            </Layout>
        </div>
    )
}

export default ConversationPage