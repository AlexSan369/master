import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Ícones para o menu mobile

export const Header: React.FC = () => {
    // Estado para controlar a visibilidade do menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ['Início', 'Sobre Nós', 'Serviços', 'Depoimentos'];

    return (
        <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-5 z-50 bg-background/80 backdrop-blur-sm">
            
            {/* Logo */}
            <a href="#" className="text-light text-3xl font-bold">
                Mestre<span className="text-primary">.</span>
            </a>

            {/* Navegação para Desktop (escondida em mobile) */}
            <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                    <a
                        key={link}
                        href="#"
                        className="text-light font-semibold tracking-wider hover:text-primary transition-colors duration-300"
                    >
                        {link}
                    </a>
                ))}
            </nav>

            {/* Botão de Agendamento para Desktop (escondido em mobile) */}
            <a
                href="#"
                className="hidden md:inline-block bg-primary text-dark-text font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
                Agendar Agora
            </a>

            {/* Botão do Menu Hambúrguer (apenas visível em mobile) */}
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-light">
                    {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Menu Mobile (Dropdown) */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-background/95 md:hidden flex flex-col items-center py-8 space-y-6 shadow-lg">
                    {navLinks.map((link) => (
                        <a key={link} href="#" className="text-light text-xl font-semibold">
                            {link}
                        </a>
                    ))}
                    <a
                        href="#"
                        className="bg-primary text-dark-text font-bold py-3 px-8 rounded-lg w-11/12 text-center"
                    >
                        Agendar Agora
                    </a>
                </div>
            )}
        </header>
    );
};
