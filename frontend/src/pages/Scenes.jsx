import React, { useContext } from 'react';
import DeckContext from "../context/DeckContext";
import SceneDeck from '../components/Decks/Scenes/SceneDeck';

const Scenes = (props) => {

    let ctx = useContext(DeckContext);
    console.log(ctx);    
    const deck = ctx.deck;

  return (
    <div>
      <SceneDeck deck={deck}/>
    </div>
  )
}

export default Scenes