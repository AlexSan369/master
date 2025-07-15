import React from 'react';
import ctaImg from '../assets/cta-bg.png';

const CtaSection: React.FC = () => {
    return (
        <section 
            className="relative py-24 bg-cover bg-center"
            style={{ backgroundImage: `url(${ctaImg})` }}
        >
            <div className="absolute inset-0 bg-background opacity-70"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-light leading-tight">
                    EXPERIMENTE O LUXO DOS NOSSOS SERVIÇOS DE BARBEARIA
                </h2>
                
                <div className="mt-8">
                    <a
                        href="#"
                        className="bg-primary text-dark-text font-bold py-4 px-10 rounded-sm hover:opacity-90 transition-opacity duration-300 text-lg"
                    >
                        AGENDAR UM HORÁRIO
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;