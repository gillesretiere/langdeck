import React, { useContext, } from 'react';
import classes from "./DuoChatDeck.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../context/DeckContext";
import DuoChatStepOptionDeck from './DuoChatStepOptionDeck';

const DuoChatStepDeckCard = ({step, onSetStep}) => {

    let ctx = useContext(DeckContext);
    const linkHandler = (event) => {
        ctx.current_deck.chat_step_deck=step;
        onSetStep(step);
    };

    return (
        <div className={`${classes.card__container__orange}`} onClick={linkHandler}>
            {/*<Link to={{pathname:`/duo_step_send_page/${step.step_language}`}} onClick={linkHandler}>*/}
                <div className={`${classes.card__wrapper}`}>
                    <div className={`${classes.card__header}`}>
                        <div className={`${classes.card__subtitle}`}>{step.num_step}</div>
                        <div className={`${classes.card__title}`}>{step.step}</div>
                    </div>
                    {step.options && step.options.map(
                        (el) => {
                            return (<DuoChatStepOptionDeck key={el.option_rec_id} option={el} translate='false'/>)
                        }
                        )
                    }
                </div>          
        </div>
    )
}

export default DuoChatStepDeckCard