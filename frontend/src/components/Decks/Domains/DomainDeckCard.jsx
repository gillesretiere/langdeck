import React from 'react';
import {useState, useEffect, useContext} from 'react';
import { Link } from "react-router-dom";
import classes from "./DomainDeckCard.module.css";

const DomainDeckCard = ({domains}) => {
  const {domain, domain_translated, domain_img, themes} = domains;
  return (
      <div className={`${classes.card__container}`}>
        <Link to={`/`}>
            <div>{domain}</div>
            <div>{domain_translated}</div>
        </Link>    
      </div>
  )
}

export default DomainDeckCard