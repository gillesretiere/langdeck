import React from 'react'
import classes from "./LanguageDeck.module.css";
import List from '@mui/material/List';
import QuestionDeckItem from "./QuestionDeckItem";



const QuestionDeck = ({ws, chatDeck, language}) => {
    console.log (ws);
    console.log (chatDeck);
    console.log (language);

  return (
    <>
        <div className={classes.card_container}>
            <div className={classes.card_header}>Choisir une question</div>
            <List sx={{ width: '100%', height: '100%', maxHeigth: '60', bgcolor: "#AFD9EE"    }}>
                {chatDeck.steps && chatDeck.steps.map(
                    (el) => {
                        return (
                            <QuestionDeckItem key={el.num_step} card={el}></QuestionDeckItem>
                            )
                    }
                )}   
            </List>
            <div className={classes.card_footer}></div>
        </div>
    </>
  )
}

export default QuestionDeck