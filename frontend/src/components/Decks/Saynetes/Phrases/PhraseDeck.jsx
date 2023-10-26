import React from 'react';
import PhraseDeckList from "./PhraseDeckList";

const PhraseDeck = ({words}) => {
  return (
    <div>
        <PhraseDeckList words = {words}></PhraseDeckList>
    </div>
  )
}

export default PhraseDeck