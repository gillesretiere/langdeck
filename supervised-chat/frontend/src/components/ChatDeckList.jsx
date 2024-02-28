import React from 'react';
import List from '@mui/material/List';
import ChatDeckItem from './ChatDeckItem';

const ChatDeckList = ({deck, onSetChatDeck}) => {

    return (
        <div>
            <List sx={{ width: '100%', height: '100%', bgcolor: "#AFD9EE"    }}>
                {deck && deck.map(
                    (el) => {
                        return (
                            <ChatDeckItem key={el.num_conversation} card={el} onSetChatDeck={onSetChatDeck}/>
                            )
                    }
                )}   
            </List>
        </div>
    )
}

export default ChatDeckList