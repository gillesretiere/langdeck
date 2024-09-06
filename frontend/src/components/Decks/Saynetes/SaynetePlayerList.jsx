import React, { useContext, useState, useEffect,  } from "react";
import DeckContext from "../../../context/DeckContext";
import classes from "../PhraseDeckGrid.module.css";
import SaynetePlayerCard from "./SaynetePlayerCard";

const SaynetePlayerList = ({phrase_deck, img, decks, id}) => {

    let params = useContext(DeckContext);

    const [phrases, setPhrases] = useState([]);

    // console.log(`Thèmes = ${decks["themes"]}`);
    const themes = decks["themes"];

    useEffect(() => {
        if (themes) {
            themes.forEach(theme => {
                const lessons = theme["lessons"];
                lessons.forEach (lesson => {
                    const stories = lesson["stories"];
                    stories.forEach (story => {
                        if (story["story_translation_id"] === id) {
                            console.log (`Found  ${id} : ${story["story_translation_id"]}`);
                            setPhrases(story["phrases"]);
                        }
                    });
                });
                
            });
        }
    }, [themes]);



    return (
        <div className={`${classes.card__list}`}>
            {phrases && phrases.map(
                (el) => {
                    return (<SaynetePlayerCard key={el.phrase_rec_id} deck={el} img={img} />)
                }
            )
            }
        </div>
    )
}

export default SaynetePlayerList