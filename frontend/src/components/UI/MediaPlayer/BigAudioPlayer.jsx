import React, { useState, useEffect } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
// import ReactAudioPlayer from 'react-audio-player';
import classes from "./AudioPlayer.module.css";


const BigAudioPlayer = ({ media_url, language, }) => {

    const [isReady, setIsReady] = useState(false);
    const [audio, setAudio] = useState(null);


    useEffect(() => {
        setIsReady(true);
        setAudio(new Audio(
            media_url
        ));
    }, [media_url]);

    function togglePlay() {
        return audio.paused ? audio.play() : audio.pause();
    };

    return (
        <>
            {isReady &&
                <PlayCircleOutlineIcon className={classes.big_button} onClick={togglePlay}></PlayCircleOutlineIcon>
            }
        </>
    )
}

export default BigAudioPlayer