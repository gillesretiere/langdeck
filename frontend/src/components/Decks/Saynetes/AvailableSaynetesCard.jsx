import React from 'react'

const AvailableSaynetesCard = ({ obj }) => {
  return (
    <>
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={obj.img} alt={obj.name} className="w-100 max-w-24" />
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
                {obj.name_fr}
            </h3>
        </div>
    </>
  )
}

export default AvailableSaynetesCard