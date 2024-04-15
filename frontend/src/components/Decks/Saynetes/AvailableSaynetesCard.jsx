import React from 'react'

const AvailableSaynetesCard = ({ obj }) => {
  return (
    <>
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
          {obj.released ?(<img src={obj.img} alt={obj.name} className="w-[280px] h-[280px]" />):(<img src={obj.img} alt={obj.name} className="w-[280px] h-[280px] grayscale" />)}
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin text-primary-green">
                {obj.name_fr}
            </h3>
            <h3 className="mt-2 text-normal leading-normal font-ff_nexus_mix">
                {obj.desc}
            </h3>            
        </div>
    </>
  )
}

export default AvailableSaynetesCard