import React, { useState, useEffect} from "react";
import classes from "./MediaSimpleAudioPlayer.module.css";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

const MediaSimpleAudioPlayerBig = ({media_url}) => {

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
      <a id="play-pause-button" onClick={togglePlay}>
      { isPlaying ? <PauseCircleOutlineIcon className={classes.svg_icons} /> : <PlayCircleOutlineIcon className={classes.svg_icons_big} /> }
      </a>
    </div>
  )
}

export default MediaSimpleAudioPlayerBig