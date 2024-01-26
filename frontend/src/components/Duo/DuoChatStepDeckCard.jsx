import React, { useContext } from 'react';
import classes from "../Decks/DeckCard.module.css";
import { Link } from "react-router-dom";
import DeckContext from "../../context/DeckContext";
import DuoChatStepOptionDeck from './DuoChatStepOptionDeck';

const DuoChatStepDeckCard = ({step}) => {

    let ctx = useContext(DeckContext);
    const linkHandler = (event) => {
        ctx.current_deck.chat_step_deck=step;
    };
    return (
        <div className={`${classes.card__container}`}>
            <Link to={{pathname:`/duo_step_page/${step.step_language}`}} onClick={linkHandler}>
                <div className={`${classes.card__wrapper}`}>
                    <div className={`${classes.card__header}`}>
                        <div className={`${classes.card__title}`}>{step.step}</div>
                        <div className={`${classes.card__sub__header}`}>
                            <div className={`${classes.card__subtitle}`}>{step.step_translation}</div>
                        </div>
                    </div>
                    {step.options && step.options.map(
                        (el) => {
                            return (<DuoChatStepOptionDeck key={el.option_rec_id} option={el} />)
                        }
                        )
                    }
                </div>          
            </Link>        
        </div>
    )
}

export default DuoChatStepDeckCard