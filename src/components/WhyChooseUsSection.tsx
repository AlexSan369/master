import React from 'react';
import FeatureCard from './FeatureCard';
import { Award, Users, Shield, Star, Instagram as InstagramIcon, MessageCircle } from 'lucide-react';
import testimonialAuthorImg from '../assets/author-img.png';

const Rating: React.FC<{ icon: React.ReactNode, platform: string, score: string, reviews: string }> = ({ icon, platform, score, reviews }) => (
    <div className="text-center">
        <div className="flex justify-center items-center gap-2 mb-2">
            {icon}
            <p className="font-bold text-lg text-dark-text">{platform}</p>
        </div>
        <p className="text-5xl font-extrabold text-dark-text">{score}</p>
        <div className="flex justify-center text-primary mt-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <p className="text-gray-500 mt-1">{reviews} avaliações</p>
    </div>
);

const WhyChooseUsSection: React.FC = () => {
    const features = [
        { icon: <Award size={48} />, title: "LICENCIADOS", description: "A nossa equipa de barbeiros licenciados e segurados segue diretrizes rígidas de limpeza e higienização para uma experiência segura e confortável." },
        { icon: <Users size={48} />, title: "MESTRES", description: "Os nossos barbeiros são apaixonados pelo seu ofício e visam fornecer cortes de cabelo de alta qualidade para cada cliente." },
        { icon: <Shield size={48} />, title: "CONFIÁVEIS", description: "Temos uma forte reputação com uma avaliação de 5 estrelas de mais de cem mil clientes satisfeitos." }
    ];

    return (
        <section id='depoimentos' className="bg-light-bg py-20 px-4 md:px-12">
            <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text">PORQUE NOS ESCOLHER</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Descubra porque somos a escolha número um para serviços de barbearia de luxo em casa. A nossa dedicação à qualidade e à sua conveniência é o que nos diferencia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-center">
                    <Rating icon={<MessageCircle size={24} />} platform="GOOGLE" score="4.9" reviews="196" />
                    
                    <div className="bg-light p-8 rounded-lg shadow-xl border border-gray-200 text-center order-first lg:order-none my-8 lg:my-0">
                        <img src={testimonialAuthorImg} alt="Autor do Depoimento" className="w-20 h-20 rounded-full mx-auto -mt-16 mb-4 border-4 border-light" />
                        <div className="flex justify-center text-primary mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                        </div>
                        <h3 className="text-xl font-bold text-dark-text mb-2">OS MELHORES SERVIÇOS DE BARBEARIA</h3>
                        <p className="text-gray-600 italic mb-4">"A conveniência e a qualidade são incomparáveis. Ter um barbeiro profissional em casa mudou a minha rotina. Recomendo vivamente!"</p>
                        <p className="font-bold text-dark-text tracking-wider">SAM HOUSTON</p>
                    </div>

                    <Rating icon={<InstagramIcon size={24} />} platform="INSTAGRAM" score="5.0" reviews="196" />
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUsSection;