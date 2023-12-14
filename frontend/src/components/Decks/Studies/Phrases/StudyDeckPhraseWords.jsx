import React, { useState } from "react";

import Popper from "@mui/material/Popper";
import StudyDeckPhraseWordPopper from "./StudyDeckPhraseWordPopper";
import classes from "./StudyDeckPhraseWord.module.css";


const StudyDeckPhraseWords = ({tp_phrase_and_words}) => {
    const {tp_phrase, tp_phrase_translation, tp_phrase_words_rec_id, tp_phrase_html_rec_id, tp_phrase_html_kw, words, } = tp_phrase_and_words;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [wordElement, setWordElement] = React.useState(null);
    const [arrowRef, setArrowRef] = useState(null);

    const callbackModal = () => {
        setAnchorEl(null);
    }
    const get_element_by_rec_id = ({elem}) => {
    let obj = vk_dict.find((o) => o.word_rec_id === elem);
    if (obj) {
        return obj.word;
    } else {
        return;
    }
    };

    const get_kw_by_rec_id = ({elem}) => {
    let idx = vk_phrase.indexOf(elem);
    if (idx) {
        return vk_phrase_kw[idx];
    } else {
        return;
    }
    };

    const vk_words = tp_phrase_words_rec_id;
    let vk_dict = words;
  
    const vk_phrase = tp_phrase_html_rec_id.split("<kw>");
    const vk_phrase_kw = tp_phrase_html_kw.split("<kw>");

    const handleClick = (event) => {
        setArrowRef(event.currentTarget);
        let obj = vk_dict.find((o) => o.word_rec_id === event.target.id);
        setWordElement(obj);
        setAnchorEl(anchorEl ? null : event.currentTarget);
      };
    
    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;

    return (
        <>
        <div>
            <Popper id={id} 
                open={open} 
                anchorEl={anchorEl}
                placement="bottom"
                disablePortal={false}
                modifiers={[
                  {
                   name: 'arrow',
                   enabled: true,
                   options: {
                     element: arrowRef,
                   }
                  }
                ]}
              >
              <StudyDeckPhraseWordPopper word={wordElement} callbackModal={callbackModal}/>
            
            </Popper>
          </div> 
        <div>
          {vk_phrase.map((elem) =>
              vk_words.indexOf(elem) !== -1 ? (
                <span key={elem} id={elem} onClick={handleClick}>
                  <mark className={classes.marked__item} id={elem}>{get_kw_by_rec_id({ elem })}</mark>
                </span>
              ) : (
                <span key={elem}>{elem}</span>
              )
            )}         
        </div>
     
        </>
    )
    }

export default StudyDeckPhraseWords