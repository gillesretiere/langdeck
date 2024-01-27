import React, { useContext, useState, } from 'react';
import classes from "./DuoChatDeck.module.css";
import DeckContext from "../../context/DeckContext";
import DuoChatStepOptionDeck from './DuoChatStepOptionDeck';
import DuoChat__init from './DuoChat__init';
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const DuoChatStepSendDeck = () => {
    let ctx = useContext(DeckContext);
    let conversation = ctx.current_deck.chat_deck;
    let step = ctx.current_deck.chat_step_deck;

    const [showChat, setShowChat] = useState(false);

    const [mainLoggedIn, setMainLogin] = useState(false);
    const [userName, setUserName] = useState("");

    const mainLogin = () => {
        setMainLogin (true);
    }
    const setUser = (event) => {
        setUserName (event.target.value);
    }

    const linkHandler = (event) => {
        ctx.current_deck.chat_step_deck=step;
    };

    const clickHandler = (event) => {
        setShowChat (!showChat);
    }

    return (
        <div className={classes. chat_container}>
            <div>
                <div className={classes.chat_sender_container}>
                    <div className={`${classes.card__container}`}>
                        <Link to={{pathname:`/duo_step_send_page/${step.step_language}`}} onClick={linkHandler}>
                            <div className={`${classes.card__wrapper}`}>
                                <div className={`${classes.card__header}`}>
                                    <div className={`${classes.card__subtitle}`}>{step.num_step}</div>
                                    <div className={`${classes.card__title}`}>{step.step}</div>
                                </div>
                                {step.options && step.options.map(
                                    (el) => {
                                        return (<DuoChatStepOptionDeck key={el.option_rec_id} option={el} translate='false' />)
                                    }
                                    )
                                }
                        
                            </div>          
                        </Link>     
                        <div className={classes.button__wrapper}>
                            <Box className={classes.mui_button} >
                                <Button color="blue_primary" m={1} variant="contained" size="small" onClick={clickHandler}>
                                    Envoyer {userName}
                                </Button> 
                            </Box>  
                        </div>   
                    </div>            
                    <div className={`${classes.response__container}`}>
                        <Link to={{pathname:`/duo_step_send_page/${step.step_language}`}} onClick={linkHandler}>
                            <div className={`${classes.card__wrapper}`}>
                                <div className={`${classes.card__header}`}>
                                    <div className={`${classes.card__subtitle}`}>{step.num_step}</div>
                                    <div className={`${classes.card__title}`}>{step.step_translation}</div>
                                </div>
                                {step.options && step.options.map(
                                    (el) => {
                                        return (<DuoChatStepOptionDeck key={el.option_rec_id} option={el} translate='true' />)
                                    }
                                    )
                                }
                            
                            </div>          
                        </Link>     
                    </div>              
                </div>
            </div>
            <div>
                {showChat && <DuoChat__init mainLogin={mainLogin} onSetUserName={setUser}/>}
            </div>

        </div>
    )
}

export default DuoChatStepSendDeck