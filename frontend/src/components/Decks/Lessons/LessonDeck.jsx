import React, { useContext } from 'react';
import Layout from '../components/UI/Layout';

import SayneteDeck from '../Saynetes/SayneteDeck';

const LessonDeck = (deck) => {

    return (
        <div>
            <div>LessonDeck</div>
            <SayneteDeck deck={deck}/>
        </div>
    )
}

export default LessonDeck