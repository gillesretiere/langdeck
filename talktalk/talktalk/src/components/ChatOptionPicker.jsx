import React, { useState, useEffect, useRef } from 'react';
import classes from "./Layout.module.css";


const ChatOptionPicker = ({option, onSetResponse}) => {
    const [selected, setSelected] = useState('');

    const clickHandler = (event) => {
        event.preventDefault();
        setSelected (event.target.getAttribute("value"));
        console.log(selected);
    }
    return (
        <div className={`${classes.option__wrapper}`} value={`${option.option}`} onClick={onSetResponse}>
        <div className={`${classes.option}`}>
            <span>{option.option_translation}</span>
        </div>
        </div>
    )
}

export default ChatOptionPicker