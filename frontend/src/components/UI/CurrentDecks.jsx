import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import DeckContext from "../../context/DeckContext";
import classes from "./Layout.module.css";

const CurrentDecks = () => {
    let ctx = useContext(DeckContext);

    console.log(ctx);

    const clickHandlerOne = () => {
        ctx.current_deck.theme_deck='';
        ctx.current_deck.story_deck='';
        ctx.current_deck.unit_deck='';
        ctx.current_deck.progression_1='';      
    }

    const clickHandlerTwo = () => {
        ctx.current_deck.story_deck='';
        ctx.current_deck.unit_deck='';
        ctx.current_deck.progression_1='';      
    }


    const clickHandlerThree = () => {
        ctx.current_deck.story_deck='';
        ctx.current_deck.progression_1='';      
    }

    const clickHandlerFour = () => {
        ctx.current_deck.progression_1='';      
    }


    console.log(ctx)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className={classes.decks__container}>
                    <Link to={`/`} onClick={clickHandlerOne}>
                    <div className={classes.decks__wrapper__lang}>
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
                    </Link>
                {ctx.current_deck.theme_deck && 
                    <Link to={`/theme_page/${ctx.current_deck.language_deck.language}`} onClick={clickHandlerTwo}>
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
                    </Link>
                }           
                {ctx.current_deck.unit_deck && 
                    <Link to={`/unit_page/${ctx.current_deck.language_deck.language}`} onClick={clickHandlerThree}>
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
                    </Link>
                }    
                {ctx.current_deck.story_deck && 
                    <Link to={`/unit_story_page/${ctx.current_deck.language_deck.language}`} onClick={clickHandlerFour}>
                    <div className={classes.decks__wrapper__saynete}>
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
                    </Link>
                }                 

               {ctx.current_deck.progression_1 && 
                    <Link to={`/unit_story_x3_page/${ctx.current_deck.language_deck.language}`}>
                    <div className={classes.decks__wrapper__progression_1}>
                        <img src='https://res.cloudinary.com/dhc7ovnwk/image/upload/v1705239636/langdeck/assets/images/one_10469300.png'/>
                        <Box>
                            <div className={classes.decks__wrapper__text}>
                                <h1>{ctx.current_deck.story_deck.story_name}</h1>
                            </div>
                            <div className={classes.decks__wrapper__text}>
                                <h2>{ctx.current_deck.story_deck.story_translation}</h2>
                            </div>
                        </Box>                            
                    </div>
                    </Link>
                }      

            </div>

        </Box>
    )
}

export default CurrentDecks