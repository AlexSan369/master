/*
 * ARQUIVO: src/App.tsx
 * DESCRIÇÃO: Ficheiro principal que gere as rotas e o estado do modal de agendamento.
 */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação das nossas páginas
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';

// Importação do nosso modal
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
    // Estado que controla se o modal de agendamento está visível
    const [isBookingModalOpen, setBookingModalOpen] = useState(false);

    // Funções para abrir e fechar o modal
    const openBookingModal = () => setBookingModalOpen(true);
    const closeBookingModal = () => setBookingModalOpen(false); // CORRIGIDO

    return (
        <div className="bg-background font-sans">
            <Router>
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            // Passamos a função para abrir o modal para a HomePage
                            <HomePage onBookNowClick={openBookingModal} />
                        } 
                    />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                </Routes>
            </Router>

            {/* O Modal de Agendamento é renderizado aqui, no topo da aplicação */}
            <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
        </div>
    );
};

export default App;