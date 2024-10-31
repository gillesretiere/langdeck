import React, { useRef, useEffect, useState, } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import classes from './SaynetePlayerCardFull.module.css';
import SaynetePlayCardFullStack from './SaynetePlayCardFullStack';

const SaynetePlayCardFull = ({ phrases, currentPhrase, callbackFunction, }) => {
    const ref = useRef(null);
    // const [newIndex, setNewIndex] = useState(parseInt(currentPhrase.phrase_position)-1);
    const [newIndex, setNewIndex] = useState(parseInt(currentPhrase.phrase_position) - 1);
    const [newCurrentPhrase, setNewCurrentPhrase] = useState(currentPhrase);

    const clickCloseHandler = () => {
        callbackFunction(ref);
    };

    const clickPrevHandler = () => {
        if (newIndex > 0) {
            // setNewIndex(parseInt(phrases[idx - 1].phrase_position))-1;
            setNewIndex(newIndex - 1);
            console.log(newIndex);
            setNewCurrentPhrase(phrases[newIndex])
            console.log(newCurrentPhrase);
        }
    };

    const clickNextHandler = () => {
        if (newIndex < phrases.length - 1) {
            // setNewIndex(parseInt(phrases[idx - 1].phrase_position))-1;
            setNewIndex(newIndex + 1);
            console.log(newIndex);
            setNewCurrentPhrase(phrases[newIndex])
            console.log(newCurrentPhrase);
        }
    };

    useEffect(() => {
        console.log(newIndex);
        setNewCurrentPhrase(phrases[newIndex])
        console.log(newCurrentPhrase);

    }, [newIndex]);

    return (
        <>
            <div className={`${classes.container}`} >
                <div className={`${classes.card_border}`}></div>
                <div className={`${classes.card_middle}`}>
                    <div className={`${classes.card_header}`}>
                        <div id={currentPhrase.phrase_rec_id} ref={ref} className={`${classes.card__img}`} >
                            <button className={`${classes.prev} ${classes.round}`} onClick={clickPrevHandler}><ArrowBackIosIcon></ArrowBackIosIcon></button>
                            <img src={newCurrentPhrase.phrase_illustration} alt="Phrase illustration" />
                            <button className={`${classes.next} ${classes.round}`} onClick={clickNextHandler}><ArrowForwardIosIcon></ArrowForwardIosIcon></button>
                        </div>
                    </div>
                    <div className={`${classes.card_body}`}>
                        {newCurrentPhrase.phrase}
                    </div>
                    <div className={`${classes.card_stack}`}><SaynetePlayCardFullStack phrase={newCurrentPhrase}></SaynetePlayCardFullStack></div>
                    <div className={`${classes.card_block}`} id={newCurrentPhrase.phrase_rec_id} ref={ref} onClick={clickCloseHandler}>
                        Close
                    </div>
                </div>
                <div className={`${classes.card_border}`}></div>
            </div>

        </>


    )
}

export default SaynetePlayCardFull