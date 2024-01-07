import React from 'react';
import classes from "./ThemeDeckCard.module.css";
import ThemeDeckCard from './ThemeDeckCard';

const ThemeDeckList = ({themes, img}) => {
    return (
        <div className={`${classes.card__list}`}>
            {themes && themes.map(
                (el) => {
                    return (<ThemeDeckCard key={el.theme_rec_id} theme={el} img={img} />)
                }
            )
            }
        </div>
      )
}

export default ThemeDeckList