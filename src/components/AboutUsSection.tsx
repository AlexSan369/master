import aboutImg from '../assets/about-us-img.png';

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div>
        <p className="text-4xl md:text-5xl font-extrabold text-primary">{value}</p>
        <p className="text-dark-text tracking-wider mt-1 text-sm">{label}</p>
    </div>
);

export const AboutUsSection: React.FC = () => {
    return (
        <section id='sobre-nos' className="bg-light-bg py-20 px-4 md:px-12">
            <div className="max-w-6xl pt-24 lg:pt-36 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-last">
                    <img 
                        src={aboutImg} 
                        alt="Barbeiro a cortar o cabelo de um cliente" 
                        className="w-full h-auto object-cover rounded-lg shadow-xl"
                    />
                </div>
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text leading-tight">
                        SEU SERVIÇO DE BARBEIRO PESSOAL EM CASA
                    </h2>
                    <p className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed">
                        Nós trazemos a experiência de uma barbearia de luxo diretamente para o conforto da sua casa. Com profissionais qualificados e os melhores produtos, garantimos um serviço impecável, adaptado à sua rotina.
                    </p>
                    <div className="mt-10 flex justify-center lg:justify-start space-x-12">
                        <StatItem value="99%" label="SATISFAÇÃO DO CLIENTE" />
                        <StatItem value="10+" label="ANOS DE EXPERIÊNCIA" />
                    </div>
                </div>
            </div>
        </section>
    );
};
