import React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';


const QuestionDeckItem = ({card}) => {
    const {step, step_translation, options} = card;

    return (
        <div>
            <ListItem alignItems="flex-start">
                <ListItemText
                primary={step}
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {step_translation}
                    </Typography>
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </div>
    )
}

export default QuestionDeckItem