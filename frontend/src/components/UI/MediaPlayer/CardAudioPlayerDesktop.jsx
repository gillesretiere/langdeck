import React, { useState, useEffect} from "react";
import media_classes from "./CardAudioPlayerDesktop.module.css";
import classes from "../../Decks/DeckCard.module.css";
import IconButton from "@mui/material/IconButton";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

const CardAudioPlayerDesktop = ({media_url, illustration}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    useEffect(() => {
        if (isPlaying) {
          console.log("Playing");
        } else {
            console.log("En Pause");

        }
      }, [isPlaying, audio]);

    var audio = new Audio(
        media_url
    );

    function togglePlay() {
        return audio.paused ? audio.play() : audio.pause();
    };
    function togglePlay2() {
        setIsPlaying((prev) => !prev);

    };    

    return (
        <div className={classes.image_container}>
            <div className={`${media_classes.media__card__img}`}>
            <img src={illustration} alt="phrase illustration"/>
                <div className={classes.image_icon_2}>
                <IconButton color="white" variant="contained" size="large">
                <a id="play-pause-button" onClick={togglePlay}>
                { isPlaying ? <PauseCircleOutlineIcon className={media_classes.audio_play_button} /> : <PlayCircleOutlineIcon className={media_classes.audio_play_button} /> }
                </a>
                </IconButton>
                </div>     
            </div>
        </div>
    )
}

export default CardAudioPlayerDesktop