import React from 'react';
import AvailableLanguagesCard from '../components/Decks/Languages/AvailableLanguagesCard';


const ScheduledLanguages = ({ languages }) => {
    return (
        <>
            <div className='text-xl sm:text-2xl font-artifex_cf font-bold tracking-tight text-gray-900 mt-5' >Bientôt disponibles</div>

            <div className={`mt-1 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-3`}>
                {languages.filter(item => item.scheduled).map((language, index) => (
                    <AvailableLanguagesCard
                        key={language.lang_name_fr}
                        lang={language}
                        {...language}
                        isLast={index === languages.length - 1}
                    />
                ))}
            </div>
        </>
    )
}

export default ScheduledLanguages