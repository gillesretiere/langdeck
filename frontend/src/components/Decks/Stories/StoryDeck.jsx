import React from 'react';
import StoryDeckList from './StoryDeckList';


const StoryDeck = ({scenes, img}) => {
  return (
    <div>
        <StoryDeckList scenes={scenes} img={img} />
    </div>
  )
}

export default StoryDeck