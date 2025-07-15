import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
    // --- STATE HOOKS ---
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // --- EFFECT HOOK ---
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // --- HANDLER FUNCTIONS ---
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth',
            });
        }
        setIsMenuOpen(false);
    };

    // --- DATA ---
    const navLinks = [
        { label: 'Início', target: 'inicio' },
        { label: 'Sobre Nós', target: 'sobre-nos' },
        { label: 'Serviços', target: 'servicos' },
        { label: 'Curso de Barbeiro', target: 'curso' },
    ];

    // --- RENDER ---
    return (
        <header 
            className={`
                fixed top-0 left-0 w-full z-50
                flex items-center justify-between
                px-6 md:px-12 py-5
                bg-background/80 backdrop-blur-sm
                transition-transform duration-500 ease-in-out
                ${/* ALTERAÇÃO: Agora, o header move-se para fora da tela em vez de ficar transparente */''}
                ${isScrolled ? 'translate-y-0' : '-translate-y-full'}
            `}
        >
            {/* Logo */}
            <a href="#inicio" onClick={(e) => handleLinkClick(e, 'inicio')} className="text-light text-3xl font-bold">
                Mestre<span className="text-primary">.</span>
            </a>

            {/* Navegação Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={`#${link.target}`}
                        onClick={(e) => handleLinkClick(e, link.target)}
                        className="text-light font-semibold tracking-wider hover:text-primary transition-colors duration-300"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>

            {/* Botão Agendar Desktop */}
            <a
                href="#agendar"
                onClick={(e) => handleLinkClick(e, 'agendar')}
                className="hidden md:inline-block bg-primary text-dark-text font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
                Agendar Agora
            </a>

            {/* Botão Menu Mobile */}
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-light z-50">
                    {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Painel do Menu Mobile */}
            <div 
                className={`
                    md:hidden fixed top-0 left-0 w-full h-screen bg-background
                    flex flex-col items-center justify-center space-y-8
                    transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                {navLinks.map((link) => (
                    <a 
                        key={link.label} 
                        href={`#${link.target}`}
                        onClick={(e) => handleLinkClick(e, link.target)}
                        className="text-light text-3xl font-semibold"
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="#agendar"
                    onClick={(e) => handleLinkClick(e, 'agendar')}
                    className="bg-primary text-dark-text font-bold py-4 px-10 rounded-lg text-xl"
                >
                    Agendar Agora
                </a>
            </div>
        </header>
    );
};
