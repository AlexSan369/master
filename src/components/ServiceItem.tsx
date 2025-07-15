/*
 * ARQUIVO: src/components/ServiceItem.tsx
 * DESCRIÇÃO: Componente para um único item na lista de serviços.
 */
import React from 'react';

// Definimos as propriedades que este componente irá receber
interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description, price }) => {
  return (
    // Container principal de um item de serviço
    <div className="flex text-left">
      {/* Ícone */}
      <div className="pr-4 text-primary">{icon}</div>
      
      {/* Conteúdo de Texto */}
      <div className="flex-grow">
        <h3 className="font-bold text-dark-text text-lg">{title}</h3>
        <p className="text-gray-500 my-1">{description}</p>
        <p className="font-bold text-primary text-lg">{price}</p>
      </div>
    </div>
  );
};

export default ServiceItem;