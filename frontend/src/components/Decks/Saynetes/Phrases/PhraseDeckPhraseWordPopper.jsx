import React, { useState } from "react";
import classes from "./PhraseDeckWordPopper.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const PhraseDeckPhraseWordPopper = ({word, callbackModal}) => {
  const [visible, setVisible] = React.useState(false);

  const handleClick = (event) => {
    setVisible(!visible);
  };

  const closeButtonClickHandler = () => {
    callbackModal();
  }

  return (
    <>
        <Box 
          sx={{ width:'100%', border: 0, borderRadius: '16px', boxShadow: 8, m:0, pt:1, px:0, bgcolor: "background.paper" }} >
          <div className={classes.word__popper__wrapper}>{word.word}</div>
          <div className={classes.container}>

            <div className={classes.word_notes}>
                <p>{word.word_notes}</p>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="column"
                    alignItems="flex-end"
                    sx={{ my: 0, mx:0, pt:1, px:0, }}
                    >
                </Box>  
                <Button className={classes.button1} variant="contained" color="primary" fullWidth sx={{ pt:1, borderRadius: "0px 0px 0px 16px", backgroundColor: "hsl(30, 122%, 54%)"}}>
                    Translate
                </Button>                
            </div>
            <div className={classes.word_nutri_notes}>
                <p>{word.word_nutri_notes}</p>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="column"
                    alignItems="flex-end"
                    sx={{ my: 0, mx:0, pt:1, px:0,}}
                    >

                </Box>  

                <Button className={classes.button1} onClick={closeButtonClickHandler} variant="contained" color="primary" fullWidth sx={{ pt:1, borderRadius: "0px 0px 16px 0px", backgroundColor: "hsl(71, 73%, 54%)",}}>
                        Close
                </Button>
            </div>          
          </div>

        </Box>  
      
    </>
  )
}

export default PhraseDeckPhraseWordPopper