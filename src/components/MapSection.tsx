/*
 * ARQUIVO: src/components/MapSection.tsx
 * DESCRIÇÃO: Seção que exibe o mapa do Google Maps.
 */
import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section className="w-full h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.148117766065!2d-35.1099866852156!3d-8.677569993769112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab06d77331e0dd%3A0x959c5e5bd5e0632b!2sPraia%20de%20Tamandar%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1678886456789!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default MapSection;