import heroImg from '../assets/hero-img.png';
import { InfoBox } from './InfoBox';

export const HeroHeader: React.FC = () => {
    return (
        <section 
            className="relative h-screen flex items-center justify-center text-light bg-cover bg-center pt-20 pb-48 md:pb-24"
            style={{ backgroundImage: `url(${heroImg})` }} 
        >
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-transparent"></div>
            <div className="absolute inset-0 bg-background opacity-50"></div>

            <div className="relative z-10 text-center max-w-4xl px-4">
                <h1 className="text-4xl md:text-7xl font-extrabold uppercase tracking-wider">
                    A Máxima Conveniência para Pessoas Ocupadas
                </h1>
                <p className="mt-4 text-base md:text-xl text-muted">
                    Experimente a conveniência dos nossos serviços de barbearia em casa.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#" className="bg-primary text-dark-text font-bold py-3 px-8 rounded-sm w-full sm:w-auto text-center">
                        AGENDAR UM HORÁRIO
                    </a>
                    <a href="#" className="border-2 border-primary text-primary font-bold py-3 px-8 rounded-sm w-full sm:w-auto text-center">
                        VER SERVIÇOS
                    </a>
                </div>
            </div>
            <InfoBox />
        </section>
    );
};