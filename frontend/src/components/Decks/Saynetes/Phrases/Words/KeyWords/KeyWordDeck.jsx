import React from 'react'
import KeyWordDeckList from './KeyWordDeckList';

const KeyWordDeck = ({keywords}) => {
  return (
    <>
        <KeyWordDeckList keywords = {keywords}></KeyWordDeckList>      
    </>
  )
}

export default KeyWordDeck