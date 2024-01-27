import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import classes from "../DeckCard.module.css";
import DeckContext from "../../../context/DeckContext";
import IconButton from "@mui/material/IconButton";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const UnitStoryTpDeck = ({unit_story, lang_img}) => {
    let ctx = useContext(DeckContext);
    let {story_name, story_translation,story_lesson_header, story_illustration, tps } = unit_story;
    let tp = tps[0];
    
    ctx.tp_aka_study=tp;

    return (
        <>
        <div className={`${classes.card__container__green}`}>
            <Link to={{pathname:`/study_page/${ctx.current_deck.language_deck.language}`}} >
                <div className={`${classes.card__wrapper}`}>
                    <div className={`${classes.card__header}`}>
                        <div className={`${classes.card__title}`}>{tp.tp_name}</div>
                        <div className={`${classes.card__sub__header}`}><div className={`${classes.card__subtitle}`}>{tp.tp_translation}</div></div>
                    </div>
                    <div className={classes.image_container}>
                        <div className={`${classes.card__img}`}>
                            <img src={story_illustration} alt="flag Icon" />
                            <div className={classes.image_icon_2}>
                                <IconButton color="white" variant="contained" size="large">
                                <PlayCircleOutlineIcon fontSize="large"/>
                                </IconButton>
                            </div>     
                        </div>
                    </div>
                    {/*              
                    <div className={`${classes.card__img}`}>
                        <img src='https://res.cloudinary.com/dhc7ovnwk/image/upload/v1705337898/langdeck/assets/images/saynetes/langdeck-lesson-header-2.png' alt="flag Icon" />
                    </div>
                    */}
                </div>                    
            </Link>     
        </div>  
        </>
    )
}

export default UnitStoryTpDeck