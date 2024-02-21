import React from 'react'

const HomeDeck = ({startingDeck}) => {
  return (
    <div>
        {startingDeck && startingDeck.map(
            (el) => {
                return (<div> {el.lang_name_fr}</div>)
            }
        )
        }        
    </div>
  )
}

export default HomeDeck
