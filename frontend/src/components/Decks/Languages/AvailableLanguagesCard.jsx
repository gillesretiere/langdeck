import React from 'react'

const AvailableLanguagesCard = ({ lang }) => {
  return (
    <>
        <div className="flex bg-white items-center p-10 border-1 flex-1 flex-col w-full max-sm:w-full">
            <img src={lang.lang_flag_icon} alt={lang.lang_name_fr} className="w-[70px] h-[70px] rounded-full" />
            <h3 className=" text-2xl font-normal tracking-wide">
                {lang.lang_name_fr}
            </h3>
        </div>
    </>
  )
}

export default AvailableLanguagesCard