import React, { useState, useEffect} from "react";
import classes from "./Layout.module.css";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

const MediaPlayer = ({media_url}) => {

    const [isPlaying, setIsPlaying] = useState(false);

    var audio = new Audio(
        media_url
    );

    function togglePlay() {
        setIsPlaying(!isPlaying);
        return audio.paused ? audio.play() : audio.pause();
    };

  return (
    <span>
      <a id="play-pause-button" onClick={togglePlay}>
      { isPlaying ? <PauseCircleOutlineIcon className={classes.svg_icons_big} /> : <PlayCircleOutlineIcon className={classes.svg_icons_big} /> }
      </a>
    </span>
  )
}

export default MediaPlayer