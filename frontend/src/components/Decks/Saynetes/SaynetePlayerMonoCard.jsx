import React from 'react';
import Button from '../../UI/HomeSection/Button';
import classes from "./SayneteMonoCard.module.css";


const SaynetePlayerMonoCard = ({ phrase, callbackModal }) => {

    const closeButtonClickHandler = () => {
        callbackModal();
    }

    return (
        <div className={`${classes.container}`}>
            {/* <div className={`${classes.card_header}`}></div> */}
            <div className={`${classes.card_body}`}>
                {phrase}
            </div>
            <div className={`${classes.card_block}`} onClick={closeButtonClickHandler}>
                Close
            </div>
        </div >
    )
}

export default SaynetePlayerMonoCard