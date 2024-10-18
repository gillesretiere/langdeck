import React, { useState, useEffect } from "react";
import classes from "./MediaSimpleAudioPlayer.module.css";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

const MediaSimpleAudioPlayer = ({ media_url }) => {

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
    setIsPlaying(!isPlaying);
    return audio.paused ? audio.play() : audio.pause();
  };
  function togglePlay2() {
    setIsPlaying((prev) => !prev);

  };


  return (
    <div>
      <a id="play-pause-button" onClick={togglePlay}>
        {isPlaying ? <PauseCircleOutlineIcon color="orange" className={classes.svg_icons} /> : <PlayCircleOutlineIcon color="orange" className={classes.svg_icons} />}
      </a>
    </div>
  )
}

export default MediaSimpleAudioPlayer