import React from 'react';
import UnitStorySayneteDeck from "./UnitStorySayneteDeck";
import UnitStoryTpDeck from "./UnitStoryTpDeck";
import UnitStoryQuizDeck from "./UnitStoryQuizDeck";
import UnitStorySplitSayneteDeck from './UnitStorySplitSayneteDeck';
import UnitStoryConversationDeck from './UnitStoryConversationDeck';
import classes from "../DeckCard.module.css";

const UnitStoryX3Deck = ({unit_story, lang_img}) => {
    console.log (unit_story)
    const {story_name, story_translation, phrases, tps, quiz} = unit_story;
    return (
        <div className={`${classes.card__list}`}>
            <UnitStorySayneteDeck saynete={unit_story} lang_img={lang_img}></UnitStorySayneteDeck>
            {/*<UnitStorySplitSayneteDeck saynete={unit_story} lang_img={lang_img}></UnitStorySplitSayneteDeck>*/}
            <UnitStoryConversationDeck saynete={unit_story} lang_img={lang_img}></UnitStoryConversationDeck>
            {/*<UnitStorySayneteDeckList saynetes={phrases} lang_img={lang_img}></UnitStorySayneteDeckList>*/}
            {/*<UnitStoryTpDeck unit_story={unit_story} lang_img={lang_img}></UnitStoryTpDeck>*/}
            <UnitStoryQuizDeck unit_story={unit_story} lang_img={lang_img}></UnitStoryQuizDeck>
        </div>
    )
}

export default UnitStoryX3Deck