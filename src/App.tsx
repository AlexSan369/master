/*
 * ARQUIVO: src/App.tsx
 * DESCRIÇÃO: Versão final da landing page com todos os componentes.
 */
import React from 'react';
import { Header } from './components/Header'; // Assumindo que exportou como nomeado
import {HeroHeader} from './components/HeroHeader';
import {AboutUsSection} from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection';
import CtaSection from './components/CtaSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import CourseEnrollmentSection from './components/CourseEnrollmentSection';
import MapSection from './components/MapSection';
import {Footer} from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="bg-background font-sans">
            <Header />
            <main>
                <HeroHeader />
                <AboutUsSection />
                <ServicesSection />
                <CtaSection />
                <WhyChooseUsSection />
                <CourseEnrollmentSection />
                <MapSection />
                <Footer />
            </main>
        </div>
    );
};

export default App;