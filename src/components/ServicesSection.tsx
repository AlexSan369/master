/*
 * ARQUIVO: src/components/ServicesSection.tsx
 * DESCRIÇÃO: Seção de serviços atualizada com as novas categorias e preços.
 */
import React from 'react';
import ServiceItem from './ServiceItem';

interface HeaderProps {
  onBookNowClick: () => void;
}

const ServicesSection: React.FC<HeaderProps> = ({ onBookNowClick }) => {
  // Novos dados dos serviços, divididos por categoria
  const cortes = [
    { title: 'Degradê', description: 'Corte moderno com transição suave.', price: 'R$ 30' },
    { title: 'Social', description: 'Corte clássico com tesoura e máquina.', price: 'R$ 30' },
    { title: 'Corte c/ Sobrancelhas', description: 'Corte completo com design de sobrancelhas.', price: 'R$ 35' },
    { title: 'Corte c/ Risquinho', description: 'Corte estilizado com navalha.', price: 'R$ 35' },
    { title: 'Cabelo e Barba', description: 'Pacote completo para cabelo e barba.', price: 'R$ 60' },
    { title: 'Barba', description: 'Modelagem e aparo da barba.', price: 'R$ 30' },
    { title: 'Sobrancelhas', description: 'Design e limpeza de sobrancelhas.', price: 'R$ 15' },
    { title: 'Pezinho do Cabelo', description: 'Acabamento e contorno do corte.', price: 'R$ 10' },
  ];

  const quimicas = [
    { title: 'Botox Capilar', description: 'Redução de volume e hidratação profunda.', price: 'R$ 80' },
    { title: 'Luzes', description: 'Clareamento de mechas para iluminar.', price: 'R$ 80' },
    { title: 'Nevou', description: 'Descoloração global para um look platinado.', price: 'R$ 80' },
    { title: 'Progressiva', description: 'Alisamento e redução de frizz.', price: 'R$ 100' },
  ];

  return (
    <section id="servicos" className="bg-light-bg py-20 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Títulos da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text">
            CONHEÇA OS NOSSOS SERVIÇOS
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Oferecemos uma gama completa de serviços para atender a todas as suas necessidades de barbearia, com a máxima qualidade e conveniência.
          </p>
        </div>

        {/* A "caixa" branca que contém a lista de serviços */}
        <div className="bg-light p-8 md:p-12 rounded-lg shadow-xl space-y-12">
          
          {/* Categoria Cortes */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">CORTES</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {cortes.map((service, index) => (
                <ServiceItem
                  key={index}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                />
              ))}
            </div>
          </div>
          
          {/* Categoria Químicas */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">QUÍMICAS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {quimicas.map((service, index) => (
                <ServiceItem
                  key={index}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Botão de Agendamento */}
        <div className="text-center mt-12">
          <a
            onClick={onBookNowClick}
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