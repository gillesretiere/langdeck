import React, { useState, useContext } from 'react';
import classes from "./StudyDeck.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


const StudyComponent = ({deck}) => {
  const [hideImage, setHideImage] = useState(false);
  const [hideImageLabel, setHideImageLabel] = useState("Cacher l'image");
  const handleClick = ({event}) => {
    setHideImage (!hideImage);
    if (hideImage) {
      setHideImageLabel ("Cacher l'image");
    } else {
      setHideImageLabel ("Afficher l'image");
    }
  }

  return (
    <div className={classes.study__wrapper}>
      <div className={classes.study__grid}>
        <div className={classes.study__container}>

            <Box sx={{ display:'flex', flexDirection:'column', flexGrow:1, alignContent: 'end', m:1}}>
            { hideImage ? (
                <div></div>):(
                <div className={classes.study_card__lesson__illustration}>
                  <img src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1701422568/langdeck/assets/images/pictorials/t5vale0dleo6hlmsusgz.png" alt="tp illustration"></img>
                </div>  
                )
            }
            <Button variant="outlined" size="small" sx={{my:1}} onClick={handleClick}>
                { hideImageLabel }
            </Button>  
          </Box>
        </div>
      </div>
    </div>
  )
}

export default StudyComponent