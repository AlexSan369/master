import React from 'react';
import {Header} from '../components/Header';
import {HeroHeader} from '../components/HeroHeader';
import AboutUsSection from '../components/AboutUsSection';
import ServicesSection from '../components/ServicesSection';
import CtaSection from '../components/CtaSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import CourseEnrollmentSection from '../components/CourseEnrollmentSection';
import MapSection from '../components/MapSection';
import {Footer} from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;