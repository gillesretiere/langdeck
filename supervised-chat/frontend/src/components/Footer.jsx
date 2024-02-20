import React from 'react';
import classes from "./Layout.module.css";


const Footer = () => {
  return (
    <>
      <div className="h-full shadow-inner p-5 overflow-hidden">
        <nav className="flex justify-start relative items-center h-16">
          <div className={`${classes.logo}`}>
            <img className={`${classes.logo}`} src='https://res.cloudinary.com/dhc7ovnwk/image/upload/v1703342819/hammer-marteau/othy1coezxdmnxvkhkmw.png'></img>
            <span> | &copy;Hammer & Marteau 2023</span> 
          </div>
        </nav>
      </div>  
    </>
  )
}

export default Footer