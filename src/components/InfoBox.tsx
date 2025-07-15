import { MapPin, Phone, Clock } from 'lucide-react';

const InfoItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-center justify-center md:justify-start text-left">
        <div className="mr-4 text-primary">{icon}</div>
        <div>
            <h3 className="font-bold text-dark-text tracking-wider">{title}</h3>
            <div className="text-gray-600">{children}</div>
        </div>
    </div>
);

export const InfoBox: React.FC = () => {
    return (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] md:w-full max-w-6xl">
            <div className="bg-light rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                <InfoItem icon={<MapPin size={40} />} title="ENDEREÇO">
                    <p>Rua Principal, 1232</p>
                    <p>Tamandaré, Pernambuco</p>
                </InfoItem>
                <InfoItem icon={<Phone size={40} />} title="TELEFONE">
                    <p>+55 (81) 99999-8888</p>
                    <p>+55 (81) 98888-7777</p>
                </InfoItem>
                <InfoItem icon={<Clock size={40} />} title="HORÁRIO">
                    <p>SEG - SÁB: 9:00 - 20:00</p>
                    <p>DOM: 9:00 - 20:00</p>
                </InfoItem>
            </div>
        </div>
    );
};