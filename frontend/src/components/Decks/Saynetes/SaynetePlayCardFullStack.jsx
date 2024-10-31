import React from 'react';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import SimpleAudioPlayer from '../../UI/MediaPlayer/SimpleAudioPlayer';


const SaynetePlayCardFullStack = ({ phrase }) => {
    return (
        <>
            <Stack direction="row" spacing={3} sx={{
                justifyContent: "space-between",
                alignItems: "flex-end",
                paddingLeft: 2,
                paddingRight: 2,
                marginTop: 3,
                marginBottom: 1,
            }}>
                <IconButton aria-label="position" sx={{
                    padding: 0,
                }}>
                    <Button>
                        <p>{phrase.phrase_position}</p>
                    </Button>
                </IconButton>
                <IconButton aria-label="play" sx={{
                    padding: 0,
                }}>
                    <Button>
                        <OpenInFullIcon />
                    </Button>
                </IconButton>
                <IconButton aria-label="play" sx={{
                    padding: 0,
                }}>
                    <Button>
                        <SimpleAudioPlayer media_url={phrase.phrase_audio_url_fr} language={'fr'}></SimpleAudioPlayer>
                    </Button>

                </IconButton>
                <Button>
                    <p>fre</p>
                </Button>
                <Button>
                    <p>{phrase.phrase_language}</p>
                </Button>
            </Stack>
        </>
    )
}

export default SaynetePlayCardFullStack