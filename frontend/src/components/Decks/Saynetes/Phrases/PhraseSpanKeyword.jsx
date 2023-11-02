import React, { useState } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";

const PhraseSpanKeyword = ({phrase}) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [wordElement, setWordElement] = React.useState(null);

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

  const vk_words = phrase.phrase_words_rec_id;
  let vk_dict = phrase.words;

  const vk_phrase = phrase.phrase_html_rec_id.split("<kw>");
  const vk_phrase_kw = phrase.phrase_html_kw.split("<kw>");

  const handleClick = (event) => {
    let obj = vk_dict.find((o) => o.word_rec_id === event.target.id);
    setWordElement(obj.word_translation);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <>
    <div>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box sx={{ border: 1, p: 3, bgcolor: "background.paper" }}>
            <div className="keyword__wrapper">{wordElement}</div>
            <button type="button">
                </button>
              <button type="button">
              Action 2
              </button>
          Action 1

          </Box>
        </Popper>
      </div> 
    <div>
      {vk_phrase.map((elem) =>
          vk_words.indexOf(elem) !== -1 ? (
            <span key={elem} id={elem} onClick={handleClick}>
              <mark id={elem}>{get_kw_by_rec_id({ elem })}</mark>
            </span>
          ) : (
            <span>{elem}</span>
          )
        )}         
    </div>
 
    </>
  )
}

export default PhraseSpanKeyword