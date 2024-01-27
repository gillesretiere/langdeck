import React, { useContext, useState, } from 'react';
import classes from "./DuoChatDeck.module.css";
import DeckContext from "../../context/DeckContext";
import DuoChatStepOptionDeck from './DuoChatStepOptionDeck';
import DuoChat__init from './DuoChat__init';
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const DuoChat__login = ({onLogin, onSetUserName}) => {
  return (
      <>
          <div className='bg-yellow-400 p-10 mt-20 rounded-xl'>
              <h2 className='text-2xl p-4 mb-2 text-white'>Login : Bitte deine UserNamme abgeben</h2>
              <input
                  type="text"
                  placeholder='Deine UserNamme'
                  className='w-full mb-4 p-2'
                  onChange={onSetUserName}/>
              <button 
                  className='w-full bg-gray-400 rounded' onClick={onLogin}>Login
              </button>
          </div>
      </>
    )
}

export default DuoChat__login