import React, { useContext, useState, useEffect, } from 'react';
import { useNavigate, } from "react-router-dom";

import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import UnitDeck from '../components/Decks/Units/UnitDeck';

const UnitPage = () => {

  let ctx = useContext(DeckContext);

  let deck = ctx.deck.theme;

  ctx.live_deck = deck.lessons;
  const navigate = useNavigate();

  // console.log(data);
  /* si la liste ne contient qu'une carte => alors on passe la sélection et on va direcement à l'option suivante
    ==> unit_page
  */
  const [skipLevel, setSkipLevel] = useState(false);
  const [check, setCheck] = useState(null);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    if (deck.lessons.length === 1) {
      const unit = deck.lessons[0];
      setLessons (deck.lessons);
      ctx.unit = unit;
      ctx.current_deck.unit_deck = unit;

      setSkipLevel (true);
      navigate(`/unit_story_page/${unit.language}`);
    }
  }, [lessons])



  return (
    <Layout>
      {
        check ?
        ! skipLevel && 
        <UnitDeck deck={ctx.deck}></UnitDeck> : null
      }
      
    </Layout>
  )
}

export default UnitPage