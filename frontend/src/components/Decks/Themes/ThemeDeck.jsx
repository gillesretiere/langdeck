import React from 'react';
import ThemeDeckList from './ThemeDeckList';


const ThemeDeck = ({themes, img}) => {
  return (
    <div>
        <ThemeDeckList themes={themes} img={img} />
    </div>
  )
}

export default ThemeDeck