import React, { useState, useEffect} from "react";
import classes from "./AudioPlayer.module.css";
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

const AudioPlayer = ({media_url, language}) => {

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
      { language==="fr" ? <VolumeUpOutlinedIcon className={classes.volume_up_fr} /> : <VolumeUpOutlinedIcon className={classes.volume_up_tr} /> }
      </a>
    </div>
  )
}

export default AudioPlayer