import React from 'react'
import Nav from "../components/UI/Hero/Nav";
import {
    Hero
} from "../sections";

const LandingPage = () => {
  return (
    <main className="relative">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
            <Hero />
        </section>
    </main>
  )
}

export default LandingPage