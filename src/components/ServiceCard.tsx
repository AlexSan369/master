/*
 * ARQUIVO: src/components/ServiceCard.tsx
 * DESCRIÇÃO: Corrigido para funcionar num fundo claro.
 */
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    // ALTERAÇÃO: Fundo `bg-background` (preto) para criar contraste com a seção branca
    <div className="bg-background p-8 rounded-lg text-center flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <div className="w-16 h-16 bg-primary text-background rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-light mb-3">{title}</h3>
      <p className="text-muted leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;