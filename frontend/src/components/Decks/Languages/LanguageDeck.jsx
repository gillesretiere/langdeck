import React from 'react';
import LanguageDeckList from "./LanguageDeckList";


const LanguageDeck = ({languages}) => {
  return (
    <>
        <LanguageDeckList languages={languages} />
    </>

  )
}

export default LanguageDeck