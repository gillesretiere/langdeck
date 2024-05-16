import React,  { useState, useContext } from 'react'; 
import Layout from '../components/UI/Layout';
import DeckContext from "../context/DeckContext";
import SaynetePlayComponent from '../components/Decks/Saynetes/SaynetePlayComponent';
import SaynetePlayCardTabletOrMobileLandscape from '../components/Decks/Saynetes/SaynetePlayCardTabletOrMobileLandscape';
import SaynetePlayCardTabletOrMobilePortrait from '../components/Decks/Saynetes/SaynetePlayCardTabletOrMobilePortrait';
import SaynetePlayCardDesktop from '../components/Decks/Saynetes/SaynetePlayCardDesktop';
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive';

const SaynetePlayPage = () => {
    let ctx = useContext(DeckContext);
    let deck = ctx.saynete_phrases;
    ctx.current_deck.progression_1=deck;
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isLandcsape = useMediaQuery({ query: '(orientation: landscape)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (
        <div>
            <Layout>
            {isDesktopOrLaptop && 
                <SaynetePlayCardDesktop deck={deck} media_type={'desktop'}></SaynetePlayCardDesktop>}
            {isTabletOrMobile && isLandcsape &&
                <SaynetePlayCardDesktop deck={deck} media_type={'landscape'}></SaynetePlayCardDesktop>}
            {isTabletOrMobile && isPortrait &&
                <SaynetePlayCardTabletOrMobilePortrait deck={deck}></SaynetePlayCardTabletOrMobilePortrait>}                
            </Layout>
        </div>
    )
}

export default SaynetePlayPage