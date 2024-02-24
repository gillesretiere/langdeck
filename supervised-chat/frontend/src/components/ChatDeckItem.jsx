import React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';


const ChatDeckItem = ({card, onSetChatDeck}) => {

    const {conversation, conversation_translation, } = card;
    const onSetItem = () => {
        onSetChatDeck(conversation);
    }

    return (
        <div>
            <ListItem alignItems="flex-start" onClick={onSetItem}>
                <ListItemText
                primary={conversation}
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {conversation_translation}
                    </Typography>
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </div>
    )
}

export default ChatDeckItem