/*
ARQUIVO: src/components/BookingModal.tsx
DESCRIÇÃO: O nosso sistema de agendamento, agora dentro de um modal.
*/

import React from 'react';
import BookingSystem from './BookingSystem'; // O sistema de passos que já criámos
import { X } from 'lucide-react';

// O nosso modal recebe duas props: se está aberto (isOpen) e a função para o fechar (onClose)
interface BookingModalProps {
isOpen: boolean;
onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
// Se não estiver aberto, não renderiza nada
if (!isOpen) return null;

return (
// Fundo semi-transparente que cobre a tela inteira
<div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">

  {/* O container do modal */}
  <div className="bg-light p-4 rounded-lg shadow-xl w-full max-w-4xl relative">
    
    {/* Botão para fechar o modal */}
    <button 
      onClick={onClose}
      className="absolute top-4 right-4 text-gray-500 hover:text-dark-text"
    >
      <X size={28} />
    </button>

    {/* Renderizamos o nosso sistema de agendamento aqui dentro */}
    <BookingSystem />
  </div>
</div>
);
};

export default BookingModal;