import React from 'react'
import classes from "./LanguageDeckList.module.css";

const AvailableLanguagesCard = ({ lang }) => {
  return (
    <>
      <div className={`${classes.card__container}`}>
        <div className={`${classes.card__wrapper}`}>
          <div className={`${classes.card__footer}`}>
            <div className="flex bg-white items-center p-1 border-0 flex-1 flex-row w-full m-2">
              <img src={lang.lang_flag_icon} alt={lang.lang_name_fr} className="w-[50px] h-[50px] rounded-full mr-5" />
              <div className="text-lg font-articulat_cf font-semibold tracking-wide mr-10">
                {lang.lang_name_fr}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AvailableLanguagesCard