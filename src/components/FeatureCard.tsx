/*
 * ARQUIVO: src/components/FeatureCard.tsx
 * DESCRIÇÃO: Componente para um destaque (ex: Licenciados).
 */
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      {/* Ícone */}
      <div className="flex justify-center mb-4 text-primary">
        {icon}
      </div>
      {/* Título */}
      <h3 className="text-xl font-bold text-dark-text mb-2">{title}</h3>
      {/* Descrição */}
      <p className="text-gray-600 px-4">{description}</p>
    </div>
  );
};

export default FeatureCard;