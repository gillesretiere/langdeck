import React from 'react';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SimpleAudioPlayer from '../../UI/MediaPlayer/SimpleAudioPlayer';
const UnitStoryDeckCardStack = ({ unit_story }) => {
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
                        <p>{unit_story.story_order}</p>
                    </Button>
                </IconButton>
                <IconButton aria-label="play" sx={{
                    padding: 0,
                }}>
                    <Button>
                        <SimpleAudioPlayer media_url={unit_story.story_audio_url_fr} language={'fr'}></SimpleAudioPlayer>
                    </Button>

                </IconButton>
                <Button>
                    <p>fre</p>
                </Button>
                <Button>
                    <p>{unit_story.story_language}</p>
                </Button>
            </Stack>
        </>
    )
}

export default UnitStoryDeckCardStack