import React from 'react';
import ServiceItem from './ServiceItem';
import { Scissors, Brush, Droplets, Shield } from 'lucide-react'; 

const ServicesSection: React.FC = () => {
    const services = [
        { icon: <Scissors size={32} />, title: 'CORTE ADULTO', description: 'Corte de cabelo e finalização com os melhores produtos.', price: 'R$ 39' },
        { icon: <Brush size={32} />, title: 'CORTE INFANTIL', description: 'Corte com cuidado especial para os mais novos.', price: 'R$ 19' },
        { icon: <Shield size={32} />, title: 'APARAR A BARBA', description: 'Aparar e modelar a barba com precisão.', price: 'R$ 29' },
        { icon: <Scissors size={32} />, title: 'BARBEAR DE PESCOÇO', description: 'Acabamento limpo e preciso para o seu pescoço.', price: 'R$ 39' },
        { icon: <Droplets size={32} />, title: 'HIDRATAÇÃO', description: 'Tratamento para revitalizar o couro cabeludo.', price: 'R$ 10' },
        { icon: <Shield size={32} />, title: 'CUIDADOS COM A BARBA', description: 'Tratamento completo para uma barba saudável.', price: 'R$ 49' },
    ];

    return (
        <section className="bg-light-bg py-20 px-4 md:px-12">
            <div className="max-w-4xl mx-auto">
                
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text">
                        CONHEÇA OS NOSSOS SERVIÇOS
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                        Oferecemos uma gama completa de serviços para atender a todas as suas necessidades de barbearia, com a máxima qualidade e conveniência.
                    </p>
                </div>

                <div className="bg-light p-6 md:p-16 rounded-lg shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {services.map((service, index) => (
                            <ServiceItem
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                price={service.price}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="bg-primary text-dark-text font-bold py-3 px-8 rounded-sm hover:opacity-90 transition-opacity duration-300"
                    >
                        AGENDAR UM HORÁRIO
                    </a>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;