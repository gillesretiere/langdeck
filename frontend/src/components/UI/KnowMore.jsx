import React, { useState } from "react";

import ReadMoreIcon from '@mui/icons-material/ReadMore';
import classes from "./Audio.module.css";


const KnowMore = ({content}) => {
    const [contentVisible, setContentVisible] = React.useState(false);
    const handleClick = (event) => {
        setContentVisible(!contentVisible);
    };

  return (
    <>
    
    { contentVisible ? (
        <div className={classes.know__more} >{content}</div>
    ):(<div className={classes.svg_icons} ><ReadMoreIcon onClick={handleClick}/></div>)}
    </>
  )
}

export default KnowMore