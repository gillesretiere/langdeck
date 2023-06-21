import React from 'react'

const LanguageDeckCard = ({language_deck}) => {
    let {language_uid,language_name_fr, language_name_en, language_name_native, flag_icon} = language_deck;

  return (
    <div>{language_name_native}</div>
  )
}

export default LanguageDeckCard