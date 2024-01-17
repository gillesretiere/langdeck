import React, { useState, useEffect} from "react";
import media_classes from "./MediaSimpleAudioPlayer.module.css";
import classes from "../../Decks/DeckCard.module.css";
import IconButton from "@mui/material/IconButton";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

const MediaAdvancedAudioPlayerMedFr = ({media_url, illustration}) => {

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
    <div>

        <div className={classes.image_container}>
            <div className={`${classes.media__card__img}`}>
            <img src={illustration} alt="flag Icon" />
                <div className={classes.image_icon_2}>
                <IconButton color="white" variant="contained" size="large">
                <a id="play-pause-button" onClick={togglePlay}>
                { isPlaying ? <PauseCircleOutlineIcon className={media_classes.svg_icons_advanced} /> : <PlayCircleOutlineIcon className={media_classes.svg_icons_advanced} /> }
                </a>
                </IconButton>
                </div>     
            </div>
        </div>



    </div>
  )
}

export default MediaAdvancedAudioPlayerMedFr