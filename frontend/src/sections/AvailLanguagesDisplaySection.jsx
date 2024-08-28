import React, { useState, useEffect, useContext, } from 'react';
import TrackVisibility from "react-on-screen";
import AvailableLanguagesCard from '../components/Decks/Languages/AvailableLanguagesCard';
import classes from "./sections.module.css";
import DeckContext from "../context/DeckContext";
import { language_section_description } from "../assets/constants";


const AvailLanguagesDisplaySection = () => {

  let deckContext = useContext(DeckContext);
  const BASE_URL = deckContext.public_urls['vps_prod'] + deckContext.url_paths['availableLanguages'];

  const filteredTitles = language_section_description.filter(p =>
    p.language === "fr"
  );

  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/`)
      .then(response => response.json())
      .then(json => {
        setLanguages(json)
      })
  }, [])

  return (
    <section id="languages" className="flex xl:flex-row lg:flex-row md:flex-col flex-col min-h-screen gap-1 mt-10 max-container">
      <div className="flex flex-col items-start max-xl:padding-x pt-5">
        <div>
          <h1 className={`text-6xl font-bold text-gray-800  ${classes.landing_page_title}`}>
            {filteredTitles[0]["title"]}
          </h1>
          <h2 className={`text-4xl font-semibold tracking-wide text-primary-orange  ${classes.landing_page_title}`}>
            {filteredTitles[0]["sub_title"]}

          </h2>
          <p className={`lg:max-w-lg mt-2 text-sm font-normal text-gray-900 tracking-wider leading-5 ${classes.landing_page_title}`}>
            {filteredTitles[0]["resume"]}

          </p>
        </div>
        <div className="relative flex-1 flex justify-center items-center bg-primary bg-cover bg-center mt-5">
          <img
            src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1668002865/langdeck/carte-monde-nuages_de_mots_header.png"
            alt="saynete collection"
            height={300}
            className="object-contain relative z-10"
          />
        </div>
        <h2 className={`text-2xl font-normal text-primary-orange mt-5  ${classes.landing_page_title}`}>
          {filteredTitles[0]["button_text"]}
        </h2>
        <div className='p-2'>
          <TrackVisibility partialVisibility once>
            {({ isVisible }) => (
              <div
                className={`mt-1 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-3 ${isVisible ? "" : ""
                  }`}
              >
                {languages.filter(item => item.language != "fre").map((language, index) => (
                  <AvailableLanguagesCard
                    key={language.lang_name_fr}
                    lang={language}
                    {...language}
                    isLast={index === languages.length - 1}
                  />
                ))}
              </div>
            )}
          </TrackVisibility>
        </div>

      </div>
    </section>
  );
};

export default AvailLanguagesDisplaySection;