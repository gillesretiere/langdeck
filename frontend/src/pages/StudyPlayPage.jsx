import React,  { useState, useContext } from 'react'; 
import Layout from '../components/UI/Layout';
import StudyComponent from '../components/Decks/Studies/StudyComponent';


const StudyPlayPage = () => {
    
    return (
        <div>
            <Layout>
                <StudyComponent></StudyComponent>
            </Layout>
        </div>
    )
}

export default StudyPlayPage