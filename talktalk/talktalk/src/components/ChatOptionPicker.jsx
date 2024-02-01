import React, { useState, useEffect, useRef } from 'react';
import classes from "./Layout.module.css";
import MediaPlayerOption from './MediaPlayerOption';


const ChatOptionPicker = ({option, audio, onSetResponse}) => {
    const [selected, setSelected] = useState('');
    console.log (option);
    const clickHandler = (event) => {
        event.preventDefault();
        setSelected (event.target.getAttribute("value"));
        console.log(selected);
    }
    return (
        <div className={`${classes.option__wrapper}`} value={`${option.option}`} id="option" onClick={onSetResponse}>
        <div className={`${classes.option}`}>
            <>
            <span><MediaPlayerOption media_url={option.option_audio_url}/></span>
            <span>{option.option_translation}</span>
            </>
        </div>
        </div>
    )
}

export default ChatOptionPicker