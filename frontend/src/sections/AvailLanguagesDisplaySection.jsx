import React, { useState, useEffect, useContext, } from 'react';
import TrackVisibility from "react-on-screen";
import AvailableLanguagesCard from '../components/Decks/Languages/AvailableLanguagesCard';
import classes from "./sections.module.css";
import DeckContext from "../context/DeckContext";

const AvailLanguagesDisplaySection = () => {

  let deckContext = useContext(DeckContext);
  const BASE_URL = deckContext.public_urls['vps_prod'] + deckContext.url_paths['availableLanguages'];
  
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/`)
      .then(response => response.json())
      .then(json => {
        setLanguages(json)
      })
  }, [])

  return (
    <section id="languages" className="w-full flex xl:flex-row flex-col min-h-screen justify-between gap-10 max-container">
      <div className="flex flex-col">
        <div className="flex flex-col">
           <h1 className={`text-4xl font-semibold text-gray-800  ${classes.landing_page_title}`}>
            Disponibles en plusieurs langues
          </h1>          
          <h2 className={`text-2xl font-normal tracking-wide text-special-orange  ${classes.landing_page_title}`}>
            Supports éducatifs audio bilingues
          </h2>
          <p className={`lg:max-w-lg mt-2 text-sm font-normal text-gray-900 tracking-wider leading-5 ${classes.landing_page_title}`}>
            Les saynètes sont traduites par des interprètes professionnels spécialisés.
            De nouvelles langues seront régulièrement ajoutées.
            L'objectif est de promouvoir l'apprentisssage de la langue française et ainsi de permettre une meilleure autonomie des patients allophones. 
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
        <h2 className={`text-2xl font-normal text-special-orange mt-5  ${classes.landing_page_title}`}>
            Les langues déjà disponibles :
          </h2>        
        <div className='p-2'>
        <TrackVisibility partialVisibility once>
          {({ isVisible }) => (
            <div
              className={`mt-1 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-1 ${
                isVisible ?  "" : ""
              }`}
            >
              {languages.filter(item=>item.language!="fre").map((language, index) => (
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