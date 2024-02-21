import React from 'react';
import classes from "./HomeDeck.module.css";

const HomeDeck = ({startingDeck}) => {
  return (
    <div className={classes.container}>
        {startingDeck && startingDeck.map(
            (el) => {
                return (
                <div className={classes.card__container__blue}> 
                  <img src={el.lang_flag_icon} className={classes.card_img}></img>
                  <h3 class="card-name">
                    {el.lang_name_fr}
                  </h3>
                </div>)
            }
        )
        }        
    </div>
  )
}

export default HomeDeck
