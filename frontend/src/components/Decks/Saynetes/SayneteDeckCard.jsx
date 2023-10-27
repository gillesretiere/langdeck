import React, { useState } from 'react';
import Parser from 'html-react-parser';
import { Popper } from '@mui/material';
import { styled, css } from '@mui/material';

import classes from "./SayneteDeck.module.css";
import CustomAudioPlayer from '../../UI/CustomAudioPlayer';
import PhraseDeck from "./Phrases/PhraseDeck";


const SayneteDeckCard = ({Phrase}) => {
    const {phrase, phrase_translation, phrase_html, phrase_audio_url_fr, phrase_audio_url, words} = Phrase;
    console.log(Phrase);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const uid = "0";
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const blue = {
      50: '#F0F7FF',
      100: '#C2E0FF',
      200: '#99CCF3',
      300: '#66B2FF',
      400: '#3399FF',
      500: '#007FFF',
      600: '#0072E5',
      700: '#0059B2',
      800: '#004C99',
      900: '#003A75',
    };
    
    const grey = {
      50: '#F3F6F9',
      100: '#E5EAF2',
      200: '#DAE2ED',
      300: '#C7D0DD',
      400: '#B0B8C4',
      500: '#9DA8B7',
      600: '#6B7A90',
      700: '#434D5B',
      800: '#303740',
      900: '#1C2025',
    };
      
    const StyledPopperDiv = styled('div')(
      ({ theme }) => css`
        background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#FFF'};
        border-radius: 8px;
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: ${theme.palette.mode === 'dark'
          ? `0px 4px 8px rgb(0 0 0 / 0.7)`
          : `0px 4px 8px rgb(0 0 0 / 0.1)`};
        padding: 0.75rem;
        color: ${theme.palette.mode === 'dark' ? grey[100] : grey[700]};
        font-size: 0.875rem;
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 500;
        opacity: 1;
        margin: 0.25rem 0;
      `,
    );
    var thisIsMyCopy = '<p>copy copy copy <span className="keyword__wrapper"><strong>keyword</strong></span></p>';
      var interpol = '<p>Tu veux du <span className="keyword__wrapper" {uid=9} {{uid}}="1" aria-describedby={{id}} onClick={{handleClick}}>café</span> ou du <span className="keyword__wrapper" {{uid}}="2" aria-describedby={{id}} onClick={{handleClick}}>thé</span> ?</p>';
    return (
    <section>
      <div className={classes.saynete__phrase__container}>
        <div className={classes.saynete__phrase__wrapper}>
          <div>
            <span><CustomAudioPlayer media_url={phrase_audio_url_fr}/></span>
            <span aria-describedby={id} onClick={handleClick} className={classes.sketch__item__text__fr}>{Parser(interpol)}</span>
            <Popper id={id} open={open} anchorEl={anchorEl}>
            <StyledPopperDiv>The content of the Popper {id} {uid}.</StyledPopperDiv>
            </Popper>
            <span className={classes.sketch__item__text__fr}>{Parser(phrase_html)}</span>
            <PhraseDeck words = {words}></PhraseDeck>
            <span><CustomAudioPlayer media_url={phrase_audio_url}/></span>
            <span className={classes.sketch__item__text__tr}>{phrase_translation}</span>
          </div>
        </div>
      </div>
    </section>
  )
}



export default SayneteDeckCard