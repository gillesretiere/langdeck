import React, { useState } from "react";
import classes from "./PhraseDeckWordPopper.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const PhraseDeckPhraseWordPopper = ({word}) => {
  const [visible, setVisible] = React.useState(false);

  const handleClick = (event) => {
    setVisible(!visible);
  };

  return (
    <>
        <Box 
          sx={{ width:'100%', border: 0, borderRadius: '16px', boxShadow: 8, m:1, pt:1, px:0, bgcolor: "background.paper" }} >
          <div className={classes.word__popper__wrapper}>{word}</div>
          <div className={classes.container}>

            <div className={classes.subscription}>
            { visible 
                    ? <div>
                    <h3>Monthly Subscription</h3>
                    <span className={classes.price}>$29</span><span className={classes.per}>per month</span>
                    <p>White bread</p>
                    <a href="#" id="sign-up">Sign Up</a>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        flexDirection="column"
                        alignItems="flex-end"
                        sx={{ my: 0, mx:0, pt:1, px:0, }}
                        >
                    </Box>  
                    </div>
                    : null
            }
                <Button className={classes.button1} onClick={handleClick} variant="contained" color="primary" fullWidth sx={{ pt:1, borderRadius: "0px 0px 0px 16px", backgroundColor: "hsl(30, 102%, 54%)"}}>
                    Action One
                </Button>                
            </div>
            <div className={classes.why}>
                <h3>Why Us</h3>
                <ul>
                <li>Tutorials by industry experts</li>
                <li>Peer & expert code review</li>
                <li>Coding exercises</li>
                <li>Access to our GitHub repos</li>
                <li>Community forum</li>
                <li>Flashcard decks</li>
                <li>New videos every week</li>
                </ul>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="column"
                    alignItems="flex-end"
                    sx={{ my: 0, mx:0, pt:1, px:0,}}
                    >

                </Box>  
                <Button className={classes.button1} variant="contained" color="primary" fullWidth sx={{ pt:1, borderRadius: "0px 0px 16px 0px", backgroundColor: "hsl(71, 73%, 54%)",}}>
                    Action Two
                </Button>
            </div>          
          </div>

        </Box>  
      
    </>
  )
}

export default PhraseDeckPhraseWordPopper