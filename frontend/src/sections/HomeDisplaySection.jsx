
import Button from "../components/UI/HomeSection/Button";
import { arrowRight } from "../assets/icons";
import { saynetes_casting } from "../assets/images";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./sections.module.css";
import appClasses from "../index.css";
import { project_description } from "../assets/constants";

/* Affichage d'accueil (Home On Display) */
const HomeDisplaySection = () => {

    const filteredTitles = project_description.filter(p =>
        p.language === "fr"
    );

    return (
        <section
            id="home"
            className="flex xl:flex-row lg:flex-row md:flex-col flex-col min-h-screen gap-1 mt-10 max-container"
        >
            <div className="relative xl:w-2/5 flex flex-col items-start max-xl:padding-x pt-5">
                <div className={`text-3xl text-gray-800 mt-10 xl:mt-0 pl-1 ${classes.landing_page_title}`}>
                    {filteredTitles[0]["series"]}
                </div>
                <div className={`text-7xl max-sm:text-[68px] max-sm:leading-[82px] font-bold text-gray-800 tracking-tight ${classes.landing_page_title}`}>
                    {filteredTitles[0]["title"]}
                </div>
                <div className={`text-primary-orange tracking-tight leading-none relative z-10 xl:pr-10 pl-1 max-sm:p-0 font-bold text-3xl my-2 ${classes.landing_page_title}`}>
                    {filteredTitles[0]["sub_title"]}<br/>
                    {filteredTitles[0]["sub_title_2"]}

                </div>

                <p className={`text-gray-900 text-md mt-1 mb-5 tracking-wider leading-5 sm:max-w-sm ${classes.landing_page_title}`}>
                    {filteredTitles[0]["description"]}
                </p>
                <Link to={{ pathname: `/language_page/` }}>
                    <Button label={filteredTitles[0]["button_text"]} textColor="text-white" backgroundColor="bg-primary-orange" borderColor="bg-primary-orange" className={`${classes.landing_page_button}`} />
                </Link>
            </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen lg:min-h-screen bg-primary bg-cover bg-center">
                <img
                    src={saynetes_casting}
                    alt="saynete collection"
                    height={700}
                    width={800}
                    className="object-contain relative z-10"
                />
            </div>

        </section>
    );
};

export default HomeDisplaySection;