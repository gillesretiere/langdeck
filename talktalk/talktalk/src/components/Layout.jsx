import React, { useState, useEffect, useRef } from 'react';
import classes from "./Layout.module.css";
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
      <div className={classes.container}>
          <Header />
          <div className={classes.layout}>{children}</div>
          <Footer/>
      </div>
    )
  }
  
  export default Layout