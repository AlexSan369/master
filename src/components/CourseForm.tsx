/*
 * ARQUIVO: src/components/CourseForm.tsx
 * DESCRIÇÃO: Formulário de inscrição para o curso de barbeiro.
 */
import React from 'react';

// Componente para um campo de formulário reutilizável
const FormInput: React.FC<{ label: string; type?: string }> = ({ label, type = 'text' }) => (
  <div>
    <label className="text-sm font-bold text-gray-500">{label}</label>
    <input 
      type={type} 
      className="w-full mt-1 bg-transparent border-b-2 border-gray-300 focus:border-primary focus:outline-none transition-colors"
    />
  </div>
);

const CourseForm: React.FC = () => {
  return (
    // Container do formulário com fundo branco, padding e sombra
    <div className="bg-light p-8 md:p-12 shadow-2xl rounded-lg">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput label="NOME COMPLETO" />
          <FormInput label="ASSUNTO" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput label="TELEFONE" type="tel" />
          <FormInput label="ENDEREÇO DE EMAIL" type="email" />
        </div>
        <div>
          <label className="text-sm font-bold text-gray-500">POR FAVOR, DIGITE A SUA MENSAGEM AQUI...</label>
          <textarea 
            rows={4}
            className="w-full mt-1 bg-transparent border-b-2 border-gray-300 focus:border-primary focus:outline-none transition-colors"
          ></textarea>
        </div>
        <div className="text-left">
          <button
            type="submit"
            className="bg-primary text-dark-text font-bold py-3 px-8 rounded-sm hover:opacity-90 transition-opacity duration-300"
          >
            INSCREVA-SE AGORA
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;