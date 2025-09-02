/*
 ARQUIVO: src/pages/HomePage.tsx
 */
import React from 'react';
// Importações de todos os nossos componentes
import { Header } from '../components/Header';
import { HeroHeader } from '../components/HeroHeader';
import AboutUsSection from '../components/AboutUsSection';
import ServicesSection from '../components/ServicesSection';
import CtaSection from '../components/CtaSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import CourseEnrollmentSection from '../components/CourseEnrollmentSection';
import MapSection from '../components/MapSection';
import { Footer } from '../components/Footer';
import BookingSystem from '../components/BookingSystem'; 

// ▼▼▼ ALTERAÇÃO PRINCIPAL AQUI ▼▼▼
// 1. Definimos uma "interface" para dizer quais propriedades esta página recebe.
interface HomePageProps {
  onBookNowClick: () => void;
}

// 2. Dizemos que o nosso componente HomePage usa esta interface.
const HomePage: React.FC<HomePageProps> = ({ onBookNowClick }) => {
  return (
    <>
      {/* 3. Agora podemos passar a propriedade para os componentes filhos */}
      <Header onBookNowClick={onBookNowClick} />
      <main>
        <HeroHeader onBookNowClick={onBookNowClick} />
        <AboutUsSection />
        <ServicesSection onBookNowClick={onBookNowClick}/>
        <BookingSystem />
        <CtaSection onBookNowClick={onBookNowClick} />
        <WhyChooseUsSection />
        <CourseEnrollmentSection />
        <MapSection />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;