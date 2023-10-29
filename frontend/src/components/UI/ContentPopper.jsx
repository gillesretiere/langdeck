import "./styles.css";
import React, { useState } from "react";
import Parser from "html-react-parser";
import parse from "html-react-parser";
import { usePopper } from "react-popper";

export default function App() {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [isShown, setIsShown] = useState(false);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "offset", options: { offset: [0, 10] } }],
    placement: "bottom"
  });
  const popperStyles = {
    ...styles.popper
    // display: isShown ? "block" : "none"
  };

  const handleClick = (event) => {
    let obj = vk_dict.find((o) => o.word_rec_id === event.target.id);
    console.log(obj.word_translation);
  };

  const get_element_by_rec_id = ({ elem }) => {
    let obj = vk_dict.find((o) => o.word_rec_id === elem);
    return obj.word;
  };

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
  console.log(vk_phrase);

  return (
    <div className="App">
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
      <div>
        <button
          type="button"
          onClick={() => setIsShown((x) => !x)}
          ref={setReferenceElement}
        >
          Reference element
        </button>
        {isShown && (
          <div
            ref={setPopperElement}
            style={popperStyles}
            {...attributes.popper}
          >
            Popper element
          </div>
        )}
      </div>
    </div>
  );
}
