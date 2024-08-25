import React from 'react'
import Nav from "../components/UI/HomeSection/Nav";
import {
    HomeDisplaySection, AvailLanguagesDisplaySection, AvailSaynetesDisplaySection, ResumeSection,
} from "../sections";

const LandingPage = () => {
  return (
    <main className="relative bg-white">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
            <HomeDisplaySection />
        </section>
        <section className="xl:padding-l wide:padding-r padding-b">
            <AvailLanguagesDisplaySection />
        </section>
        <section className="xl:padding-l wide:padding-r padding-b">
            <AvailSaynetesDisplaySection />
        </section>        
        <section className="xl:padding-l wide:padding-r padding-b">
            <ResumeSection />
        </section>                
    </main>
  )
}

export default LandingPage