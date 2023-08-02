import React from 'react';
import SketchCard from "./SketchCard";

const SketchCardIterator = ({ scene }) => { if(scene) {
  const {phrases} = scene;
  return (
    <div>
      {phrases && phrases.map((el) => {
        return (<SketchCard key={el._id} Phrase={el.phrase} />)
        })}
    </div>
  )
}}

export default SketchCardIterator;