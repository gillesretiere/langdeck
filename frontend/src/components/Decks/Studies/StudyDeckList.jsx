import React from 'react';
import StudyDeckCard from "./StudyDeckCard";


const StudyDeckList = ({study}) => {if(study) {
  const {tps} = study;
  console.log (tps);
  return (
    <div>
      {tps && tps.map((el) => {
        return (
            <StudyDeckCard key={el.tp_phrase_translation_id} Tp={el} />
        )
        })}
    </div>
  )
}
}

export default StudyDeckList