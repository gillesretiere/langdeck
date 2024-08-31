import React from 'react'
import { saynetes } from "../assets/constants";
import TrackVisibility from "react-on-screen";
import AvailableSaynetesCard from '../components/Decks/Saynetes/AvailableSaynetesCard';
import AvailableSaynetes from './AvailableSaynetes';
import ScheduledSaynetes from './ScheduledSaynetes';
import StandBySaynetes from './StandBySaynetes';
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
      <div className="flex flex-col">
        <div>
          <h1 className={`text-xl sm:text-5xl font-artifex_cf font-bold tracking-tight text-gray-900`}>
            {filteredTitles[0]["sub_title"]}
          </h1>
          <p className={`lg:max-w-lg text-sm sm:text-lg font-normal mt-2 text-gray-900 tracking-wider leading-5 ${classes.landing_page_title}`}>
            {filteredTitles[0]["resume"]}
          </p>
        </div>
        <div>
          <h1 className={`text-2xl sm:text-5xl font-artifex_cf font-bold tracking-tight text-gray-800 mt-4`}>
            {filteredTitles[0]["title"]}
          </h1>
          {/* 3 états possibles */}
          {/* available */}
          <AvailableSaynetes saynetes={saynetes} />
          <div className='p-2'>
            <Link to={{ pathname: `/language_page/` }}>
              <Button label={filteredTitles[0]["button_text"]} textColor="text-white" backgroundColor="bg-primary-orange" borderColor="bg-primary-orange" className={`${classes.landing_page_button}`} />
            </Link>
          </div>

          {/* scheduled */}
          <ScheduledSaynetes saynetes={saynetes} />

          {/* standby */}
          <StandBySaynetes saynetes={saynetes} />

        </div>

      </div>
    </section>
  )
}

export default AvailSaynetesDisplaySection