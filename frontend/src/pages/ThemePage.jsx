import React, { useState, useEffect, useContext, } from 'react';
import { useParams, useNavigate, } from "react-router-dom";
import AutoComplete from '../components/UI/AutoComplete';
import ThemeDeck from '../components/Decks/Themes/ThemeDeck';
import Layout from '../components/UI/Layout';
import classes from "./Pages.module.css";
import DeckContext from "../context/DeckContext";

const ThemePage = () => {

  let deckContext = useContext(DeckContext);
  const BASE_URL = deckContext.public_urls['vps_prod'] + deckContext.url_paths['availableThemes'];
  const navigate = useNavigate();

  const { id } = useParams();
  const [decks, setDecks] = useState('');
  const [autoComplete, setautoComplete] = useState(false);
  const [value, setValue] = useState(decks[0]);
  const [inputValue, setInputValue] = useState('');

  let params = useContext(DeckContext);

  const skipLevels = (json) => {
    let data = json;
    // console.log(data);
    /* si la liste ne contient qu'une carte => alors on passe la sélection et on va direcement à l'option suivante
      ==> unit_page
    */
    if (data.themes.length === 1) {
      const theme = data.themes[0];
      params.deck = { theme };
      params.theme = data.themes[0];
      params.current_deck.theme_deck = data.themes[0];
      params.live_deck = data.themes;
      navigate(`/unit_page/${theme.language}`);
    }

    return data;
  };


  useEffect(() => {
    fetch(`${BASE_URL}/${id}`)
      .then(response => response.json())
      .then(json => {
        setDecks(skipLevels(json));
      })
      .then()
  }, [decks]);

  const setValueHandler = (newValue) => {
    setValue(newValue);
  };

  const setInputValueHandler = (newInputValue) => {
    setInputValue(newInputValue);
  };

  return (
    <Layout>
      {autoComplete &&
        <>
          <div className={classes.page__title}>Sélectionnez un thème</div>
          {decks && <AutoComplete options={decks.themes.map(a => a.theme_name)} value={value} inputValue={inputValue} setValue={setValueHandler} setInputValue={setInputValueHandler} />}
        </>
      }
      <div>
        {decks && <ThemeDeck themes={decks.themes.filter(({ theme_name }) => theme_name.toLowerCase().startsWith(inputValue))} img={decks.lang_flag_icon} />}
      </div>
    </Layout>
  )
}

export default ThemePage