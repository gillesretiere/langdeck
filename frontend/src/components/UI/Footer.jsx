import React from 'react';
import classes from "./Layout.module.css";
import { HM_LOGO_GRAY, HM_LOGO_RED, GREENU_LOGO, } from "../../assets/images";

const Footer = () => {
  return (
    <>
      <div className="h-full shadow-inner p-5 overflow-hidden">
        <nav className="flex justify-start relative items-center h-16">
          <div className={classes.logo}>
            <img src={GREENU_LOGO}></img>
            <span className='ml-2 text-slate-500 text-xs'>&copy; 2024 GR-Expression numérique</span> 
          </div>
        </nav>
      </div>  
    </>
    )
}
export default Footer