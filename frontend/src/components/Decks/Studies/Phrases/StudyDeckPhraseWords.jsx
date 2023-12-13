import React from 'react'

const StudyDeckPhraseWords = ({tp_phrase_and_words}) => {
    const {tp_phrase, tp_phrase_translation} = tp_phrase_and_words;
    return (
        <div>{tp_phrase}</div>
    )
    }

export default StudyDeckPhraseWords