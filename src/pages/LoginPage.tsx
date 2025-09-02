/*
 * ARQUIVO: src/pages/LoginPage.tsx
 * DESCRIÇÃO: Página de login funcional com autenticação do Firebase.
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirecionar o utilizador
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Importamos a nossa instância do auth

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); // Hook para navegar entre páginas

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            // Tentamos fazer o login com o Firebase
            await signInWithEmailAndPassword(auth, email, password);
            // Se for bem-sucedido, redirecionamos para o painel de administração
            navigate('/admin');
        } catch (err) {
            // Se falhar, mostramos uma mensagem de erro
            console.error("Erro de autenticação:", err);
            setError('Email ou palavra-passe inválidos. Por favor, tente novamente.');
        } finally {
            setIsLoading(false);
        }
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
                    {/* Mostra a mensagem de erro, se existir */}
                    {error && <p className="text-sm text-red-600">{error}</p>}
                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 font-bold text-dark-text bg-primary rounded-lg hover:opacity-90 transition-opacity duration-300 disabled:bg-gray-400"
                        >
                            {isLoading ? 'A ENTRAR...' : 'ENTRAR'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;