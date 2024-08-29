import React from 'react';
import classes from "../LanguageDeckGrid.module.css";


const AvailableSaynetesCard = ({ obj }) => {
  return (
    <>
      <div className="flex flex-1 flex-col my-5">
        {obj.released ?
          (<img src={obj.img} alt={obj.name} className="w-full max-w-40 max-h-40 sm:max-w-64 sm:max-h-64" />) :
          (<img src={obj.img} alt={obj.name} className="w-full max-w-40 max-h-40 sm:max-w-64 sm:max-h-64 grayscale" />)
        }
        <h3 className="font-secondary_font mt-2 text-2xl leading-normal tracking-normal font-semibold">
          {obj.name_fr}
        </h3>
        <h3 className="font-primary_font mt-2 font-medium text-sm tracking-wider text-gray-800 leading-5">
          {obj.desc}
        </h3>
      </div>
    </>
  )
}

export default AvailableSaynetesCard