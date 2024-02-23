import React from 'react';
import List from '@mui/material/List';
import LanguageDeckItem from './LanguageDeckItem';

const LanguageDeckList = ({deck}) => {

    return (
        <div>
            <List sx={{ width: '100%', height: '100%', bgcolor: "#AFD9EE"    }}>
                {deck && deck.map(
                    (el) => {
                        return (
                            <LanguageDeckItem key={el._id} card={el}/>
                            )
                    }
                )}   
            </List>
        </div>
    )
}

export default LanguageDeckList