import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import DeckContext from "../../context/DeckContext";
import classes from "./Layout.module.css";

const CurrentDecks = () => {
    let ctx = useContext(DeckContext);
    console.log(ctx)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className={classes.decks__container}>
                {ctx.current_deck.language_deck && 
                    <div className={classes.decks__wrapper}>
                        <img src={ctx.current_deck.language_deck.lang_flag_icon}/>
                        <Box>
                        <div className={classes.decks__wrapper__text}>
                            <h1>{ctx.current_deck.language_deck.lang_name_fr}</h1>
                        </div>
                        <div className={classes.decks__wrapper__text}>
                            <h2>{ctx.current_deck.language_deck.lang_name_native}</h2>
                        </div>
                        </Box>
                    </div>
                }
                {ctx.current_deck.theme_deck && 
                    <div className={classes.decks__wrapper}>
                        <img src={ctx.current_deck.theme_deck.theme_illustration}/>
                        <Box>
                            <div className={classes.decks__wrapper__text}>
                                <h1>{ctx.current_deck.theme_deck.theme_name}</h1>
                            </div>
                            <div className={classes.decks__wrapper__text}>
                                <h2>{ctx.current_deck.theme_deck.theme_translation}</h2>
                            </div>
                        </Box>                        
                    </div>
                }           
                {ctx.current_deck.unit_deck && 
                    <div className={classes.decks__wrapper}>
                        <img src={ctx.current_deck.unit_deck.lesson_illustration}/>
                        <Box>
                            <div className={classes.decks__wrapper__text}>
                                <h1>{ctx.current_deck.unit_deck.lesson}</h1>
                            </div>
                            <div className={classes.decks__wrapper__text}>
                                <h2>{ctx.current_deck.unit_deck.lesson_translation}</h2>
                            </div>
                        </Box>                           
                        
                    </div>
                }    
                {ctx.current_deck.story_deck && 
                    <div className={classes.decks__wrapper}>
                        <img src={ctx.current_deck.story_deck.story_illustration}/>
                        <Box>
                            <div className={classes.decks__wrapper__text}>
                                <h1>{ctx.current_deck.story_deck.story_name}</h1>
                            </div>
                            <div className={classes.decks__wrapper__text}>
                                <h2>{ctx.current_deck.story_deck.story_translation}</h2>
                            </div>
                        </Box>                            
                        
                    </div>
                }                                    
            </div>

        </Box>
    )
}

export default CurrentDecks