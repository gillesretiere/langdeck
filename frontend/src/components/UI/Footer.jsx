import React from 'react';
import classes from "./Layout.module.css";

const Footer = () => {
  return (
    <>
      <div className="h-full shadow-inner p-5 overflow-hidden">
        <nav className="flex justify-start relative items-center h-16">
          <div className={classes.logo}>
            <img src='https://res.cloudinary.com/dhc7ovnwk/image/upload/v1711213230/langdeck/assets/gren-logo-orange.png'></img>
            <span className='ml-2'>&copy;2024 OPT'R - Hammer & Marteau</span> 
          </div>
        </nav>
      </div>  
    </>
    )
}
export default Footer