import React, { useState, useEffect } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
// import ReactAudioPlayer from 'react-audio-player';
import classes from "./AudioPlayer.module.css";


const SimpleAudioPlayer = ({ media_url, language, }) => {

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
                <PlayCircleOutlineIcon className={classes.volume_up_tr} onClick={togglePlay}></PlayCircleOutlineIcon>
            }
        </>
    )
}

export default SimpleAudioPlayer