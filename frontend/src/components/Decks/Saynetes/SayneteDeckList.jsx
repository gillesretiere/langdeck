import React from 'react';
import SayneteDeckCard from "./SayneteDeckCard";
import ReactPopperTest from '../../UI/Popper/ReactPopperTest';

const SayneteDeckList = ({ scene }) => { if(scene) {
  const {phrases} = scene;
  console.log (phrases);
  return (
    <div>
      {phrases && phrases.map((el) => {
        return (
          <>
        <SayneteDeckCard key={el._id} Phrase={el} />
        <ReactPopperTest />
          </>

        )
        })}
    </div>
  )
}}

export default SayneteDeckList;