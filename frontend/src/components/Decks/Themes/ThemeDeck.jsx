import React, {useContext} from 'react';
import ThemeDeckList from './ThemeDeckList';
import DeckContext from "../../../context/DeckContext";


const ThemeDeck = ({ themes, img }) => {
  const deckContext = useContext(DeckContext);
  deckContext.live_deck = themes;
  return (
    <div>
      <ThemeDeckList themes={themes} img={img} />
    </div>
  )
}

export default ThemeDeck