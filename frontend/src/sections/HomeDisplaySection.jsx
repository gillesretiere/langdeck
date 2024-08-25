
import Button from "../components/UI/HomeSection/Button";
import { arrowRight } from "../assets/icons";
import { saynetes_casting } from "../assets/images";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./sections.module.css";
import appClasses from "../index.css";

/* Affichage d'accueil (Home On Display) */
const HomeDisplaySection = () => {
    return (
        <section
        id="home"
        className="flex xl:flex-row lg:flex-row md:flex-col flex-col min-h-screen gap-1 mt-10 max-container"
        >
        <div className="relative xl:w-2/5 flex flex-col items-start max-xl:padding-x pt-5">

            <div className={`text-7xl max-sm:text-[68px] max-sm:leading-[82px] mt-10 xl:mt-0 font-normal ${classes.landing_page_title}`}>
                <span className={`text-gray-800 tracking-tight relative z-10 leading-none font-bold ${classes.landing_page_title}`}>
                Les Saynètes
                </span>            
            </div>
            <div className={`text-special-orange tracking-tight leading-none relative z-10 xl:pr-10 max-sm:p-0 font-bold text-3xl my-2 ${classes.landing_page_title}`}>
            Projet éducatif et <br/> thérapeutique bilingue
            </div>

            <p className={`text-gray-900 text-md mt-1 mb-5 tracking-wider leading-5 sm:max-w-sm ${classes.landing_page_title}`}>
            Les saynètes sont de petites histoires mettant en scène des personnages. Elles ont pour objectif de sensibiliser sur des thèmes comme le diabète, l'alimentation et la pratique d'exercices physiques, à l'usage des non francophones.
            </p>
            <Link to={{pathname:`/language_page/`}}>
                <Button label="Vers les saynètes" iconURL={arrowRight} textColor="text-white" backgroundColor="bg-special-orange" borderColor="bg-special-orange" className={`${classes.landing_page_button}`}/>
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