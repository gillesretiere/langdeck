import React from 'react';
import UnitDeckList from './UnitDeckList';


const UnitDeck = ({deck}) => {
  return (
    <div>
        <UnitDeckList deck={deck} />
    </div>
  )
}

export default UnitDeck