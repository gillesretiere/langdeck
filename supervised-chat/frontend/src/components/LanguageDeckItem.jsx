import React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const LanguageDeckItem = ({card}) => {

    const {lang_name_fr, lang_name_en, lang_name_native, lang_flag_icon, } = card;

    return (
        <div>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={lang_flag_icon} />
                </ListItemAvatar>
                <ListItemText
                primary={lang_name_fr}
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {lang_name_native}
                    </Typography>
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </div>
    )
}

export default LanguageDeckItem