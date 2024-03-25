import React from 'react'

const AvailableLanguagesCard = ({ lang }) => {
  return (
    <>
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={lang.lang_flag_icon} alt={lang.lang_name_fr} className="w-[70px] h-[70px] rounded-full" />
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
                {lang.lang_name_fr}
            </h3>
        </div>
    </>
  )
}

export default AvailableLanguagesCard