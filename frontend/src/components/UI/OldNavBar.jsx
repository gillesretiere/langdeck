import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo-langdeck-w_fpt-v1.png';

const OldNavBar = () => {
  return (
    <div className="logo-small h-full shadow-lg p-5 overflow-hidden">
        <nav className="flex justify-between relative items-center h-16">
            <Link to="/" className="pl-8 text-xl text-black para1"><img className="logo-small" src={logo}></img></Link>
        </nav>
    </div>
  )
}

export default OldNavBar