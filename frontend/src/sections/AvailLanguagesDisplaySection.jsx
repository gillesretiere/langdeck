import React from 'react';
import classes from "./sections.module.css";
import Button from "../components/UI/HomeSection/Button";
import { Link } from "react-router-dom";
import { language_section_description } from "../assets/constants";
import { languages } from "../assets/constants";
import AvailableLanguages from './AvailableLanguages';
import ScheduledLanguages from './ScheduledLanguages';



const AvailLanguagesDisplaySection = () => {

  const filteredTitles = language_section_description.filter(p =>
    p.language === "fr"
  );

  return (
    <section id="languages" className="flex xl:flex-row lg:flex-row md:flex-col flex-col min-h-screen gap-1 mt-1 sm:mt-10 max-container">
      <div className="flex flex-col items-start max-xl:padding-x pt-5">
        <div>

          <h1 className={`text-xl sm:text-5xl font-artifex_cf font-bold tracking-tight text-gray-900`}>
            {filteredTitles[0]["sub_title"]}

          </h1>
          <p className={`lg:max-w-lg mt-2 text-sm sm:text-lg font-semibold text-gray-700 tracking-wide leading-5 ${classes.landing_page_title}`}>
            {filteredTitles[0]["resume"]}

          </p>
        </div>
        <div className="relative flex-1 flex justify-center items-center bg-primary bg-cover bg-center mt-5">
          <img
            src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1668002865/langdeck/carte-monde-nuages_de_mots_header.png"
            alt="saynete collection"
            height={300}
            className="object-contain relative z-10 rounded-lg sm:rounded-3xl"
          />
        </div>

        <div className='p-2'>
          <h1 className={`text-lxl sm:text-3xl font-artifex_cf font-bold tracking-tight text-gray-800 my-5`}>
            {filteredTitles[0]["title"]}
          </h1>
          <AvailableLanguages languages={languages} />
          <ScheduledLanguages languages={languages} />
        </div>
        <div className='mt-5 p-2'>
          <Link to={{ pathname: `/language_page/` }}>
            <Button label={filteredTitles[0]["button_text"]} textColor="text-white" backgroundColor="bg-primary-orange" borderColor="bg-primary-orange" className={`text-sm sm:text-5xl`} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AvailLanguagesDisplaySection;