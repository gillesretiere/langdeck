import React from 'react';
import Header from './Header';
import Footer from './Footer';
import classes from "./Layout.module.css";

const Layout = ({children}) => {
  return (
    <div className={`${classes.container} min-h-screen bg-gray-50`}>
        <Header />
        <div className={`${classes.layout} min-h-full bg-blue-50`}>{children}</div>
        <Footer />
    </div>
  )
}

export default Layout