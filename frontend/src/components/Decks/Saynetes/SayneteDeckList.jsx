import React from 'react';
import SayneteDeckCard from "./SayneteDeckCard";

const SayneteDeckList = ({ scene }) => { if(scene) {
  const {phrases} = scene;
  console.log (phrases);
  return (
    <div>
      {phrases && phrases.map((el) => {
        return (
          <>
        <SayneteDeckCard key={el._id} Phrase={el} />
          </>

        )
        })}
    </div>
  )
}}

export default SayneteDeckList;