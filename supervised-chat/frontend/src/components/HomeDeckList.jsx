import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import HomeDeckCard from './HomeDeckCard';
import classes from "./HomeDeck.module.css";


const HomeDeckList = ({deck}) => {
    return (
        <div>
            <List sx={{ width: '100%', height: '100%', bgcolor: "#AFD9EE"    }}>
                {deck && deck.map(
                    (el) => {
                        return (
                            <HomeDeckCard key={el._id} card={el}/>
                            )
                    }
                )}   
            </List>
        </div>
    )
}

export default HomeDeckList