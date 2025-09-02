/*
 * ARQUIVO: src/pages/LoginPage.tsx
 * DESCRIÇÃO: Página de login para a área administrativa.
 */
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // A lógica de autenticação com o Firebase virá aqui
        console.log('Tentativa de login com:', { email, password });
        alert('Funcionalidade de login em desenvolvimento!');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-light-bg">
            <div className="w-full max-w-md p-8 space-y-8 bg-light rounded-xl shadow-lg">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-dark-text">
                        Área do Colaborador
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Inicie sessão para aceder ao painel.
                    </p>
                </div>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="text-sm font-bold text-gray-600">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-bold text-gray-600">Palavra-passe</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 font-bold text-dark-text bg-primary rounded-lg hover:opacity-90 transition-opacity duration-300"
                        >
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;