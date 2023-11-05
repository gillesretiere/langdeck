import React from 'react'

const CustomAudioPlayer = ({media_url}) => {
  var audio = new Audio(media_url);
  return (
    <div>
        <audio controls preload="metadata">
        <source src={media_url} type="audio/mpeg"/>
        </audio>
    </div>
  )
}

export default CustomAudioPlayer;