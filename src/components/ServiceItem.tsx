/*
 * ARQUIVO: src/components/ServiceItem.tsx
 * DESCRIÇÃO: Componente para um único item na lista de serviços.
 */
import React from 'react';

interface ServiceItemProps {
  title: string;
  description: string;
  price: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, price }) => {
  return (
    // Container principal de um item de serviço
    <div className="text-left">
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-bold text-dark-text text-lg uppercase">{title}</h3>
        <p className="font-bold text-primary text-lg">{price}</p>
      </div>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default ServiceItem;