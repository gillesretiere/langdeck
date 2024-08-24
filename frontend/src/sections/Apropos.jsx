import React from 'react'
import { services } from "../assets/constants";
import ServiceCard from "../components/ServiceCard";
import TrackVisibility from "react-on-screen";
import classes from "./sections.module.css";

const Apropos = () => {
  return (
    <section id="apropos" className="w-full flex xl:flex-row flex-col justify-between min-h-screen gap-10 max-container">
      <div className="flex flex-col">
        <div className="flex flex-col">
           <h1 className={`text-4xl font-semibold text-gray-800  ${classes.landing_page_title}`}>
           &Agrave; propos du projet
          </h1>          
          <h2 className={`text-2xl font-normal tracking-wide text-special-orange  ${classes.landing_page_title}`}>
          Un projet collaboratif en partenariat
          </h2>
          <div className={`lg:max-w-lg text-sm font-normal mt-2 text-gray-900 tracking-wider leading-5 ${classes.landing_page_title}`}>
          <ul className="sm:max-w-sm lg:max-w-lg list-disc pl-5">
            <li>Diététiciennes expertes de DAC44 (Dispositif d'Appui à la Coordination de Loire-Atlantique) : élaboration du contenu des saynètes, dialogues comportant les messages à visée thérapeutique</li>
            <li>Interprètes/traductrices ASAMLA (Interprétariat et Médiation pour l'Intégration) : traduction des saynètes en 5 langues : arabe, russe, roumain, anglais, turc.</li>
            <li>Consultant Informatique (Hammer & Marteau): Web design, mise en page des livrets, illustrations, audio, traitement des données. </li>
          </ul>
          </div>
        </div>
        <div className='p-2'>
        <TrackVisibility partialVisibility once>
          {({ isVisible }) => (
            <div
              className={`mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ${
                isVisible ?  "" : ""
              }`}
            >
                      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
            </div>
          )}
        </TrackVisibility>            
        </div>
      </div>
    </section>
  )
}

export default Apropos