import React from 'react';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import BigAudioPlayer from '../../UI/MediaPlayer/BigAudioPlayer';
import classes from "./SayneteMonoCard.module.css";


const SaynetePlayerMonoCard = ({ phrase, callbackModal }) => {

    const closeButtonClickHandler = () => {
        callbackModal();
    }

    return (
        <div className={`${classes.container}`}>
            {/* <div className={`${classes.card_header}`}></div> */}
            <div className={`${classes.card_body}`}>
                {phrase.phrase}
            </div>
            <div className={`${classes.card_play_button}`}>
                <BigAudioPlayer media_url={phrase.phrase_audio_url_fr} language={'fr'}></BigAudioPlayer>
            </div>
            <div className={`${classes.card_block}`} onClick={closeButtonClickHandler}>
                Fermer
            </div>
        </div >
    )
}

export default SaynetePlayerMonoCard