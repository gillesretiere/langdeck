import React, { useContext, useState, useEffect, } from "react";
import DeckContext from "../../../context/DeckContext";
import classes from "../PhraseDeckGrid.module.css";
import SaynetePlayerCard from "./SaynetePlayerCard";

const SaynetePlayerList = ({ img, id, stories }) => {

    const [phrases, setPhrases] = useState([]);
    const [navLinks, setNavLinks] = useState([]);
    const context = useContext(DeckContext);

    useEffect(() => {
        if (stories.length) {
            stories.forEach(story => {
                if (story["story_translation_id"] === id) {
                    setPhrases(story["phrases"]);
                }
            });
        }

    }, [stories]);

    useEffect(() => {

        const newArray = phrases.map(element => {
            const obj = {};
            return {
                ...obj,
                label: `${element.phrase_position}`,
                url: `/theme_page/${element.phrase_related_story_rec_id}`,
                icon: element.phrase_illustration,
                action: 'Choisir une phrase',
                level: 'phrase',
            };
        });
        setNavLinks(newArray);
        context.drawer_navlinks = newArray;

    }, [phrases]);



    return (
        <div className={`${classes.card__list}`}>
            {phrases && phrases.map(
                (el) => {
                    {
                        /* 
                    return (<SaynetePlayerCard key={el.phrase_rec_id} deck={el} img={img} />)
                    return (<Test key={el.phrase_rec_id} deck={el} img={img} />)

                        */
                    }
                    return (<SaynetePlayerCard key={el.phrase_rec_id} deck={el} img={img} />)

                }
            )
            }
        </div>
    )
}

export default SaynetePlayerList