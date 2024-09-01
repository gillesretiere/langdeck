import React from 'react'
import Nav from "../components/UI/HomeSection/Nav";
import MenuNavigation from '../components/UI/HomeSection/MenuNavigation';
import {
    HomeDisplaySection, AvailLanguagesDisplaySection, AvailSaynetesDisplaySection, ResumeSection,
} from "../sections";

const LandingPage = () => {
  return (
    <main className="relative">
        <MenuNavigation />
        <section className="xl:padding-l wide:padding-r padding-b bg-special-gris-clair">
            <HomeDisplaySection />
        </section>
        <section className="xl:padding-l wide:padding-r padding-b bg-sky-blue">
            <AvailLanguagesDisplaySection />
        </section>

        <section className="xl:padding-l wide:padding-r padding-b bg-primary-pale-orange">
            <AvailSaynetesDisplaySection />
        </section>   
        <section className="xl:padding-l wide:padding-r padding-b">
            <ResumeSection />
        </section>           
    </main>
  )
}

export default LandingPage