import React from 'react';
import StudyDeckWordPopper from "./StudyDeckWordPopper";

const StudyDeckPhraseWordPopper = ({word, callbackModal}) => {
  return (
    <>
    <StudyDeckWordPopper word={word} callbackModal={callbackModal}></StudyDeckWordPopper>
    <div>StudyDeckPhraseWordPopper</div>
    </>
  )
}

export default StudyDeckPhraseWordPopper