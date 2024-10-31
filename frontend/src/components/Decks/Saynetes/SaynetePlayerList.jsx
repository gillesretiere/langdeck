import React, { useContext, useState, useEffect, useRef, } from "react";
import DeckContext from "../../../context/DeckContext";
import classes from "../PhraseDeckGrid.module.css";
import SaynetePlayerCard from "./SaynetePlayerCard";
import SaynetePlayCardFull from "./SaynetePlayCardFull";

const SaynetePlayerList = ({ img, id, stories }) => {

    const [phrases, setPhrases] = useState([]);
    const [currentPhrase, setCurrentPhrase] = useState(null);
    const [currentCardId, setCurrenCardId] = useState(null);
    const [navLinks, setNavLinks] = useState([]);
    const [fullCard, setFullCard] = useState(false);
    const boxRef = useRef(null);
    const context = useContext(DeckContext);

    

    const callbackFunction = (ref) => {
        setFullCard(!fullCard);
        if (fullCard) {
            setCurrenCardId(null);
        } else {
            setCurrenCardId(ref.current.getAttribute("id"));
        }
        context.currentCardId = ref.current.getAttribute("id");
        // console.log(phrases);
        var phr = null;
        if (phrases.length) {
            phrases.forEach(phrase => {
                if (phrase["phrase_rec_id"] === ref.current.getAttribute("id")) {
                    phr = phrase;
                    setCurrentPhrase(phrase);
                }
            });
        }
        /*
        console.log(phr);
        console.log(fullCard);
        */

    }

    const clickHandler = (event) => {
        console.log(event.currentTarget.getAttribute("id"));
    }

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
                phrase_rec_id: `${element.phrase_rec_id}`,
            };
        });
        setNavLinks(newArray);
        context.drawer_navlinks = newArray;
        if (phrases.length) {
            phrases.forEach(phrase => {
                if (phrase["phrase_rec_id"] === currentCardId) {
                    setCurrentPhrase(phrase);
                }
            });
            setCurrenCardId(newArray["phrase_rec_id"]);
        }
    }, [phrases]);



    return (
        <>
            {currentCardId ? <SaynetePlayCardFull key={currentCardId} phrases={phrases} currentPhrase={currentPhrase} callbackFunction={callbackFunction} /> :
                <>
                    <div className={`${classes.card__list}`}>
                        {phrases && phrases.map(
                            (el) => {
                                {
                                    /* 
                                return (<SaynetePlayerCard key={el.phrase_rec_id} deck={el} img={img} />)
                                return (<Test key={el.phrase_rec_id} deck={el} img={img} />)
            
                                    */
                                }
                                return (
                                    <>
                                        <SaynetePlayerCard key={el.phrase_rec_id} deck={el} callbackFunction={callbackFunction} />
                                    </>
                                )

                            }
                        )
                        }
                    </div>
                </>
            }

        </>

    )
}

export default SaynetePlayerList