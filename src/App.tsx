/*
 * ARQUIVO: src/App.tsx
 * DESCRIÇÃO: Adicionada a rota para a página de login.
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'; // <-- IMPORTE A NOVA PÁGINA

const App: React.FC = () => {
    return (
        <div className="bg-background font-sans">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} /> {/* <-- ADICIONE A NOVA ROTA */}
                    {/* <Route path="/admin" element={<AdminDashboard />} /> */}
                </Routes>
            </Router>
        </div>
    );
};

export default App;