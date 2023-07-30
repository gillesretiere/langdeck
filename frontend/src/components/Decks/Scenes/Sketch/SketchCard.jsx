import React from 'react'

const PhraseCard = ({Phrase}) => {
    const {phrase, translation} = Phrase;
  return (
    <div>
        <p>{phrase}</p>
        <p>{translation}</p>
    </div>
  )
}

export default PhraseCard