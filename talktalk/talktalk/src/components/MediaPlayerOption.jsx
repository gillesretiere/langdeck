import React, { useState, useEffect} from "react";
import classes from "./Layout.module.css";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

const MediaPlayerOption = ({media_url}) => {

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
      { isPlaying ? <PauseCircleOutlineIcon className={classes.svg_icons_tiny_white} /> : <PlayCircleOutlineIcon className={classes.svg_icons_tiny_white} /> }
      </a>
    </span>
  )
}

export default MediaPlayerOption