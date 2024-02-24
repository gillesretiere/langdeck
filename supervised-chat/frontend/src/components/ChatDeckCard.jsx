import React from 'react';
import classes from "./HomeDeck.module.css";
import BookmarkAddedTwoToneIcon from '@mui/icons-material/BookmarkAddedTwoTone';
import BookmarkAddTwoToneIcon from '@mui/icons-material/BookmarkAddTwoTone';
import AdjustIcon from '@mui/icons-material/Adjust';

const ChatDeckCard = ({onSetSelected, on, language, chatDeck}) => {
    return (
        <div className={classes.card_container} onClick={onSetSelected}>
            {on==true ? (
              <>
                {language ? (
                  <div className={classes.card_header}>{language}<BookmarkAddedTwoToneIcon /></div>
                ):(
                  <div className={classes.card_header}>{language}&nbsp;<AdjustIcon /></div>
                )}
                <div className={`${classes.card__img__bw}`}>
                  <img src='https://res.cloudinary.com/dhc7ovnwk/image/upload/v1708773080/langdeck/assets/images/woman-texting-couch.jpg'></img>
                </div>
              </>
            ):(
              <>
                <div className={classes.card_header}>Choisir un deck de conversation<BookmarkAddTwoToneIcon /></div>
                <div className={`${classes.card__img}`}>
                    <img src='https://res.cloudinary.com/dhc7ovnwk/image/upload/v1708773080/langdeck/assets/images/woman-texting-couch.jpg'></img>
                </div>
              </>
            )}
          <div className={classes.card_footer}></div>
        </div>
    )
}

export default ChatDeckCard