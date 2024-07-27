import React from 'react'
import Nav from "../components/UI/Hero/Nav";
import {
    Hero, AvailableLanguages, AvailableSaynetes, Apropos,
} from "../sections";

const LandingPage = () => {
  return (
    <main className="relative bg-white">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
            <Hero />
        </section>
        <section className="xl:padding-l wide:padding-r padding-b">
            <AvailableLanguages />
        </section>
        <section className="xl:padding-l wide:padding-r padding-b">
            <AvailableSaynetes />
        </section>        
        <section className="xl:padding-l wide:padding-r padding-b">
            <Apropos />
        </section>                
    </main>
  )
}

export default LandingPage