import React, { useState } from "react";

import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";

const ReactPopperTest = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [wordElement, setWordElement] = useState(null);

  const phrase =
    "Tu veux du <kw>recpFeoCwi15UyOe3<kw> ou un <kw>recdsQ1ThzPmnsxRY<kw> ?";
  const vk_words = ["recpFeoCwi15UyOe3", "recdsQ1ThzPmnsxRY"];
  let vk_dict = [
    {
      word_rec_id: "recpFeoCwi15UyOe3",
      word: "pain",
      word_translation: "bread"
    },
    {
      word_rec_id: "recdsQ1ThzPmnsxRY",
      word: "bol de céréales",
      word_translation: "bowl of cereal"
    }
  ];
  const vk_phrase = phrase.split("<kw>");

  const get_element_by_rec_id = ({ elem }) => {
    let obj = vk_dict.find((o) => o.word_rec_id === elem);
    //
    return obj.word;
  };

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
              <mark id={elem}>{get_element_by_rec_id({ elem })}</mark>
            </span>
          ) : (
            <span>{elem}</span>
          )
        )}
      </div>
    </>
  );
};

export default ReactPopperTest;
