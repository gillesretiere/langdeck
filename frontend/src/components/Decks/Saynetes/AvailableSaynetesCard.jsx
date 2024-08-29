import React from 'react';
import classes from "../LanguageDeckGrid.module.css";


const AvailableSaynetesCard = ({ obj }) => {
  return (
    <>
      <div className="flex flex-1 flex-col my-5">
        {obj.released ?
          (<img src={obj.img} alt={obj.name} className="w-full max-w-40 max-h-40 sm:max-w-64 sm:max-h-64 rounded-3xl" />) :
          (<img src={obj.img} alt={obj.name} className="w-full max-w-40 max-h-40 sm:max-w-64 sm:max-h-64 grayscale rounded-3xl" />)
        }
        <h3 className="font-secondary_font mt-2 text-xl sm:text-2xl leading-normal tracking-normal font-semibold">
          {obj.name_fr}
        </h3>
        <h3 className="font-primary_font mt-2 font-medium text-sm tracking-wider text-gray-800 leading-5 mr-8">
          {obj.desc}
        </h3>

      </div>
    </>
  )
}

export default AvailableSaynetesCard