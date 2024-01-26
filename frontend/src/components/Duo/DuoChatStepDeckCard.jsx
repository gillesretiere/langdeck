import React, { useContext } from 'react';
import classes from "./DuoChatDeck.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../context/DeckContext";
import DuoChatStepOptionDeck from './DuoChatStepOptionDeck';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const DuoChatStepDeckCard = ({step}) => {

    let ctx = useContext(DeckContext);
    const linkHandler = (event) => {
        ctx.current_deck.chat_step_deck=step;
    };

    const clickHandler = () => {
        ctx.current_deck.chat_step_deck=step;
        console.log('clicked');
    }    
    return (
        <div className={`${classes.card__container}`}>
            <Link to={{pathname:`/duo_step_send_page/${step.step_language}`}} onClick={linkHandler}>
                <div className={`${classes.card__wrapper}`}>
                    <div className={`${classes.card__header}`}>
                        <div className={`${classes.card__subtitle}`}>{step.num_step}</div>
                        <div className={`${classes.card__title}`}>{step.step}</div>
                    </div>
                    {step.options && step.options.map(
                        (el) => {
                            return (<DuoChatStepOptionDeck key={el.option_rec_id} option={el} />)
                        }
                        )
                    }
                 
                </div>          
            </Link>     
            <div className={classes.button__wrapper}>
                <Box className={classes.mui_button} >
                    <Button color="blue_primary" m={1} variant="contained" size="small" to={{pathname:`/duo_step_send_page/${step.step_language}`}} onClick={clickHandler}>
                        Démarrer
                    </Button> 
                </Box>  
            </div>    
        </div>
    )
}

export default DuoChatStepDeckCard