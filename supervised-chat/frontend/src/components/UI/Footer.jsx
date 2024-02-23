import React from 'react';
import classes from "./Layout.module.css";


const Footer = () => {
  return (
    <>
      <div className="h-24 shadow-inner p-5 overflow-hidden">
        <nav className="flex justify-start relative items-center">
          <div className={`${classes.logo}`}>
            <img className={`${classes.logo}`} src='https://res.cloudinary.com/dhc7ovnwk/image/upload/v1703342819/hammer-marteau/othy1coezxdmnxvkhkmw.png'></img>
            <span> | &copy;Hammer & Marteau 2024</span> 
          </div>
        </nav>
      </div>  
    </>
  )
}

export default Footer