
import Button from "../components/UI/Hero/Button";
import { arrowRight } from "../assets/icons";
import { bigPicture } from "../assets/images";
import { femDoctor } from "../assets/images";
import { womanLaptop2 } from "../assets/images";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./sections.module.css";
import appClasses from "../index.css";


const Hero = () => {
    const [womanLaptopImg,setWomanLaptopImg] = useState(femDoctor);
    return (
        <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
        >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-30">

            <div className={`mt-10 text-8xl max-sm:text-[68px] max-sm:leading-[82px] font-normal ${classes.landing_page_title}`}>
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 xl:pr-10 max-sm::p-0 text-6xl">
            Les Saynètes
            </span>
            <br />
            <span className={`text-primary-orange inline-block mt-3 font-bold ${classes.landing_page_title}`}>
            Le diabète{" "}
            </span>{" "}
            </div>
            <p className={`text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ${classes.landing_page_title}`}>
            Petites histoires thématiques pour sensibiliser sur le diabète, l'alimentation et la pratique d'exercices physiques, à l'usage des non francophones.
            </p>
            <Link to={{pathname:`/language_page/`}}>
                <Button label="Vers les saynètes" iconURL={arrowRight} backgroundColor="bg-primary-green" textColor="text-white"/>
            </Link>
        </div>

        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
            <img
            src={womanLaptopImg}
            alt="saynete collection"
            height={400}
            width={500}
            className="object-contain relative z-10"
            />
        </div>

        </section>
    );
};

export default Hero;