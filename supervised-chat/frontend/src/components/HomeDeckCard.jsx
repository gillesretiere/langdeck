import React from 'react';
import classes from "./HomeDeck.module.css";
import Box from "@mui/material/Box";
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

const HomeDeckCard = ({on}) => {
    return (
        <div className={classes.card_container}>
            <div className={classes.card_header}>

            {on==true ? (
                <Box
                display="flex"
                alignItems="center"
                justifyContent='right'

              >
                  <div>Choisir une langue</div>  
                  <div><ToggleOnIcon sx={{ fontSize: 40 }}/></div>
              </Box>
            ):(
                <Box
                display="flex"
                alignItems="center"
                justifyContent='right'

              >
                  <div>Choisir une langue</div>  
                  <div><ToggleOffIcon sx={{ fontSize: 40 }}/></div>
              </Box>         
            )}
            </div>

          <div className={`${classes.card__img}`}>
            <img src='https://res.cloudinary.com/dhc7ovnwk/image/upload/v1708698583/langdeck/assets/images/rzrbgshhsdwu5a3reztj.jpg'></img>
          </div>
          <div className={classes.card_footer}></div>
        </div>
    )
}

export default HomeDeckCard