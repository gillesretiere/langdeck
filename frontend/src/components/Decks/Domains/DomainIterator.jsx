import React from 'react';
import DomainDeckCard from "./DomainDeckCard";
import classes from "./DomainDeckCard.module.css";

const DomainIterator = ({domains}) => {
    console.log(domains);
  return (
    <div className={`${classes.card__list}`}>
        {Array.isArray(domains) ? domains.map(
            el => {
            return (                               
                <DomainDeckCard key={el.domain} domains = {el} />                     
            )
        })
        : <DomainDeckCard key={domains.domain} domains = {domains} /> }
    </div>    
  )
}

export default DomainIterator;