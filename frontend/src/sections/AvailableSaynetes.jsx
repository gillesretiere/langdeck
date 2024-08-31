import React from 'react';
import AvailableSaynetesCard from '../components/Decks/Saynetes/AvailableSaynetesCard';


const AvailableSaynetes = ({saynetes}) => {
    return (
        <>
            <div className='text-xl sm:text-3xl font-artifex_cf font-bold tracking-tight text-gray-900 mt-5' >Déjà disponibles</div>

            <div className={`grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14`}
            >

                {saynetes.filter(item => item.available && item.released).map((saynete, index) => (
                    <AvailableSaynetesCard
                        key={saynete.name_fr}
                        obj={saynete}
                        {...saynete}
                        isLast={index === saynetes.length - 1}
                    />
                ))}
            </div>
        </>
    )
}

export default AvailableSaynetes