import React, { useState, useEffect, } from 'react';
import TrackVisibility from "react-on-screen";
import AvailableLanguagesCard from '../components/Decks/Languages/AvailableLanguagesCard';
import classes from "./sections.module.css";


const BASE_URL = "http://51.91.8.112:8000/langdeck";

const AvailableLanguages = () => {

  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/`)
      .then(response => response.json())
      .then(json => {
        setLanguages(json)
      })
  }, [])

  return (
    <section id="languages" className="w-full flex xl:flex-row flex-col justify-between min-h-screen gap-10 max-container">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="text-4xl font-palanquin font-bold text-primary-green">
            Les <span className={`text-primary-orange`}>langues</span> disponibles
          </h2>
          <p className={`lg:max-w-lg mt-2 font-montserrat text-slate-gray ${classes.landing_page_title}`}>
            Les saynètes sont proposées en version bilingue et sont traduites par des traducteurs-interprètes professionnels.
            De nouvelles langues seront régulièrement ajoutées.
          </p>
        </div>
        <div className='p-2'>
        <TrackVisibility partialVisibility once>
          {({ isVisible }) => (
            <div
              className={`mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ${
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

export default AvailableLanguages;