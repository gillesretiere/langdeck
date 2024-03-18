import React, { useState, useEffect} from "react";
import classes from "./MediaSimpleAudioPlayer.module.css";
import Box from "@mui/material/Box";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

const MediaSimpleAudioPlayerTiny = ({media_url}) => {

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
    <Box sx={{ display: 'flex' }} alignItems='left'>

      <a id="play-pause-button" onClick={togglePlay}>
      <Box sx={{ display: 'flex' }} alignItems='left'>
        { isPlaying ? <PauseCircleOutlineIcon className={classes.svg_icons_tiny} /> : <PlayCircleOutlineIcon className={classes.svg_icons_tiny} /> }
        </Box>
      </a>
    </Box>
  )
}

export default MediaSimpleAudioPlayerTiny