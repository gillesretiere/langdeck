import React from 'react'
import Nav from "../components/UI/Hero/Nav";
import {
    Hero, AvailableLanguages, AvailableSaynetes
} from "../sections";

const LandingPage = () => {
  return (
    <main className="relative">
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
    </main>
  )
}

export default LandingPage