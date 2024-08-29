import React from 'react'
import { saynetes } from "../assets/constants";
import TrackVisibility from "react-on-screen";
import AvailableSaynetesCard from '../components/Decks/Saynetes/AvailableSaynetesCard';
import classes from "./sections.module.css";
import Button from "../components/UI/HomeSection/Button";
import { Link } from "react-router-dom";
import { saynetes_section_description } from "../assets/constants";


const AvailSaynetesDisplaySection = () => {

  const filteredTitles = saynetes_section_description.filter(p =>
    p.language === "fr"
  );

  return (
    <section id="saynetes" className="w-full flex xl:flex-row flex-col justify-between min-h-screen gap-10 max-container">
      <div className="flex flex-col items-start max-xl:padding-x pt-5">
        <div>
          <h1 className={`text-5xl font-bold tracking-tight text-gray-800  ${classes.landing_page_title}`}>
            {filteredTitles[0]["title"]}
          </h1>
          <h2 className={`text-4xl font-semibold tracking-tight text-sky-blue  ${classes.landing_page_title}`}>
            {filteredTitles[0]["sub_title"]}
          </h2>
          <p className={`lg:max-w-lg text-sm font-normal mt-2 text-gray-900 tracking-wider leading-5 ${classes.landing_page_title}`}>
            {filteredTitles[0]["resume"]}
          </p>
        </div>
        <div className='mt-8 p-2'>
          <Link to={{ pathname: `/language_page/` }}>
            <Button label={filteredTitles[0]["button_text"]} textColor="text-white" backgroundColor="bg-primary-orange" borderColor="bg-primary-orange" className={`${classes.landing_page_button}`} />
          </Link>
        </div>
        <div className='p-2'>
          <TrackVisibility partialVisibility once>
            {({ isVisible }) => (
              <div
                className={`mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ${isVisible ? "" : ""
                  }`}
              >
                {saynetes.filter(item => item.available).map((saynete, index) => (
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

export default AvailSaynetesDisplaySection