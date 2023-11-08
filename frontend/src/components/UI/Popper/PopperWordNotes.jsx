import React, { useState } from "react";

import ReadMoreIcon from '@mui/icons-material/ReadMore';
import classes from "./PopperWordNotes.module.css";


const PopperWordNotes = ({ word_notes, word_nutri_notes  }) => {
  // const { word_notes, word_nutri_notes } = content;

  console.log(word_notes);
    const [contentVisible, setContentVisible] = React.useState(false);
    const handleClick = (event) => {
        setContentVisible(!contentVisible);
    };

  return (
    <>
    
    { contentVisible ? (
      <div>
        <div className={classes.know__more} >{word_notes}</div>
        <div className={classes.know__more} >
          <img className={classes.nutri__icon} src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1699431491/langdeck/dfptfmy84so3wjm48wcd.png" />

          {word_nutri_notes}
        </div>
      </div>
    ):(<div className={classes.svg_icons} ><ReadMoreIcon color="primary" onClick={handleClick}/></div>)}
    </>
  )
}

export default PopperWordNotes