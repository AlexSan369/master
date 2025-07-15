import { Instagram, Youtube } from 'lucide-react';

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.94 11.06A10 10 0 1 0 12 22a10 10 0 0 0 8.94-10.94Z"/>
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
        <path d="M12 12a4.95 4.95 0 0 0 5-5"/>
    </svg>
);

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background text-muted py-8 px-4 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-center md:text-left text-sm">
                    &copy; {currentYear} Master Barbearia - Todos os direitos reservados
                </p>
                <div className="flex items-center space-x-5">
                    <a href="#" className="hover:text-primary transition-colors"><GoogleIcon /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Instagram size={24} /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Youtube size={24} /></a>
                </div>
            </div>
        </footer>
    );
};