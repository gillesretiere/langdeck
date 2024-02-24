import React from 'react';
import classes from "./HomeDeck.module.css";
import BookmarkAddedTwoToneIcon from '@mui/icons-material/BookmarkAddedTwoTone';
import BookmarkAddTwoToneIcon from '@mui/icons-material/BookmarkAddTwoTone';
import AdjustIcon from '@mui/icons-material/Adjust';

const HomeDeckLanguageSelector = ({onSetSelected, on, language}) => {
    return (
        <div className={classes.card_container} onClick={onSetSelected}>
            {on==true ? (
              <>
                {language ? (
                  <div className={classes.card_header}>{language}<BookmarkAddedTwoToneIcon /></div>
                ):(
                  <div className={classes.card_header}>{language}Choisir une langue<AdjustIcon /></div>
                )}
                <div className={`${classes.card__img__bw}`}>
                  <img src='https://res.cloudinary.com/dhc7ovnwk/image/upload/v1708698583/langdeck/assets/images/rzrbgshhsdwu5a3reztj.jpg'></img>
                </div>
              </>
            ):(
              <>
                <div className={classes.card_header}>Choisir une langue<BookmarkAddTwoToneIcon /></div>
                <div className={`${classes.card__img}`}>
                  <img src='https://res.cloudinary.com/dhc7ovnwk/image/upload/v1708698583/langdeck/assets/images/rzrbgshhsdwu5a3reztj.jpg'></img>
                </div>
              </>
            )}
          <div className={classes.card_footer}></div>
        </div>
    )
}

export default HomeDeckLanguageSelector