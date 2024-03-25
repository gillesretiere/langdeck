import React from 'react'
import { saynetes } from "../assets/constants";
import TrackVisibility from "react-on-screen";
import AvailableSaynetesCard from '../components/Decks/Saynetes/AvailableSaynetesCard';
import classes from "./sections.module.css";

const AvailableSaynetes = () => {
  return (
    <section id="saynetes" className="w-full flex xl:flex-row flex-col justify-between min-h-screen gap-10 max-container">
      <div className="flex flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          Les <span className={`text-primary-orange`}>saynètes</span> disponibles
        </h2>
        <p className={`lg:max-w-lg mt-2 font-montserrat text-slate-gray ${classes.landing_page_title}`}>
          Les saynètes sont proposées en version bilingue et sont traduites par des traducteurs-interprètes professionnels.
          De nouvelles langues seront régulièrement ajoutées.
        </p>
      </div>
      <div className='p-20'>
      <TrackVisibility partialVisibility once>
        {({ isVisible }) => (
          <div
            className={`mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ${
              isVisible ?  "" : ""
            }`}
          >
            {saynetes.map((saynete, index) => (
              <AvailableSaynetesCard
                key={saynete.name_fr}
                obj={saynete}
                {...saynete}
                isLast={index === saynetes.length - 1}
              />
            ))}
          </div>
        )}
      </TrackVisibility>
      </div>
    </section>
  )
}

export default AvailableSaynetes