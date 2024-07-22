
import Button from "../components/UI/Hero/Button";
import { arrowRight } from "../assets/icons";
import { bigPicture } from "../assets/images";
import { femDoctor } from "../assets/images";
import { womanLaptop2 } from "../assets/images";
import { saynetes_casting } from "../assets/images";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./sections.module.css";
import appClasses from "../index.css";


const Hero = () => {
    const [womanLaptopImg,setWomanLaptopImg] = useState(femDoctor);
    return (
        <section
        id="home"
        className="flex xl:flex-row lg:flex-row md:flex-col flex-col min-h-screen gap-1 mt-10 max-container"
        >
        <div className="relative xl:w-2/5 flex flex-col items-start max-xl:padding-x pt-5">

            <div className={`text-8xl max-sm:text-[68px] max-sm:leading-[82px] font-normal ${classes.landing_page_title}`}>
            <span className="text-special-orange tracking-tight relative z-10 xl:pr-10 max-sm::p-0 font-bold text-4xl">
            Les Saynètes
            </span>
            <br />
            <span className={`text-gray-800 tracking-tight leading-none inline-block font-bold ${classes.landing_page_title}`}>
            Le diabète
            </span>
            </div>
            <p className={`text-slate-gray text-lg mt-1 mb-5 leading-none sm:max-w-sm ${classes.landing_page_title}`}>
            Petites histoires thématiques pour sensibiliser sur le diabète, l'alimentation et la pratique d'exercices physiques, à l'usage des non francophones.
            </p>
            <Link to={{pathname:`/language_page/`}}>
                <Button label="Vers les saynètes" iconURL={arrowRight} textColor="text-white" backgroundColor="bg-special-orange" borderColor="bg-special-orange" className={`${classes.landing_page_button}`}/>
            </Link>
        </div>

        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen lg:min-h-screen bg-primary bg-cover bg-center">
            <img
            src={saynetes_casting}
            alt="saynete collection"
            height={500}
            width={600}
            className="object-contain relative z-10"
            />
        </div>

        </section>
    );
};

export default Hero;