import React from 'react'
import { saynetes } from "../assets/constants";
import TrackVisibility from "react-on-screen";
import AvailableSaynetesCard from '../components/Decks/Saynetes/AvailableSaynetesCard';
import classes from "./sections.module.css";

const AvailableSaynetes = () => {
  return (
    <section id="saynetes" className="w-full flex xl:flex-row flex-col justify-between min-h-screen gap-10 max-container">
      <div className="flex flex-col">
        <div className="flex flex-col">
           <h1 className={`text-5xl font-bold text-gray-800  ${classes.landing_page_title}`}>
           Les saynètes
          </h1>          
          <h2 className={`text-4xl font-bold text-special-orange  ${classes.landing_page_title}`}>
            Un projet éducatif et thérapeutique bilingue original
          </h2>
          <p className={`lg:max-w-lg mt-2 text-gray-900 tracking-wider leading-5 ${classes.landing_page_title}`}>
            Créées en partenariat avec des professionels de chaque domaine, les saynètes sont déclinées en plusieurs formats ou supports : application Web et Mobile, livret au format A3.
            La version numérique inclut une gestion de mots-clés avec définition des mots et des phrases à retenir.
          </p>
        </div>
        <div className='p-2'>
        <TrackVisibility partialVisibility once>
          {({ isVisible }) => (
            <div
              className={`mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ${
                isVisible ?  "" : ""
              }`}
            >
              {saynetes.filter(item=>item.available).map((saynete, index) => (
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
      </div>
    </section>
  )
}

export default AvailableSaynetes