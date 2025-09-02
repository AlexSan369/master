/*
 * ARQUIVO: src/components/AppointmentSection.tsx
 * DESCRIÇÃO: Seção com formulário para agendamento de horários.
 */
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

// Lista de serviços que oferecemos. Podemos movê-la para um ficheiro separado no futuro.
const listaDeServicos = [
    'Degradê', 'Social', 'Corte c/ Sobrancelhas', 'Corte c/ Risquinho', 
    'Cabelo e Barba', 'Barba', 'Sobrancelhas', 'Pezinho do Cabelo',
    'Botox Capilar', 'Luzes', 'Nevou', 'Progressiva'
];

// Horários disponíveis
const horariosDisponiveis = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
];

const AppointmentSection: React.FC = () => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [servico, setServico] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await addDoc(collection(db, "agendamentos"), {
                nomeCliente: nome,
                telefoneCliente: telefone,
                servico: servico,
                data: data,
                hora: hora,
                dataAgendamento: new Date(),
                status: 'Pendente' // Podemos usar um status para controlar o agendamento
            });

            setIsSuccess(true);
            // Limpa o formulário
            setNome('');
            setTelefone('');
            setServico('');
            setData('');
            setHora('');

        } catch (error) {
            console.error("Erro ao criar agendamento: ", error);
            alert("Não foi possível realizar o agendamento. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="agendar-horario" className="bg-light-bg py-20 px-4 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text">
                    AGENDE SEU <span className="text-primary">HORÁRIO</span>
                </h2>
                <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                    Escolha o serviço, a data e a hora. É rápido, fácil e garante o seu lugar na nossa cadeira.
                </p>

                {isSuccess ? (
                    <div className="mt-8 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md shadow-lg" role="alert">
                        <p className="font-bold">Agendamento Realizado!</p>
                        <p>Recebemos o seu pedido. Entraremos em contacto em breve para confirmar. Obrigado!</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="mt-12 bg-light p-8 rounded-lg shadow-xl text-left space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="font-bold text-gray-700">Nome Completo</label>
                                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                            <div>
                                <label className="font-bold text-gray-700">Telefone</label>
                                <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} required className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                        </div>
                        <div>
                            <label className="font-bold text-gray-700">Serviço Desejado</label>
                            <select value={servico} onChange={(e) => setServico(e.target.value)} required className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                                <option value="" disabled>Selecione um serviço...</option>
                                {listaDeServicos.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="font-bold text-gray-700">Data</label>
                                <input type="date" value={data} onChange={(e) => setData(e.target.value)} required className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                            <div>
                                <label className="font-bold text-gray-700">Hora</label>
                                <select value={hora} onChange={(e) => setHora(e.target.value)} required className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option value="" disabled>Selecione um horário...</option>
                                    {horariosDisponiveis.map(h => <option key={h} value={h}>{h}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" disabled={isLoading} className="bg-primary text-dark-text font-bold py-3 px-8 rounded-sm hover:opacity-90 transition-opacity duration-300 disabled:bg-gray-400">
                                {isLoading ? 'A AGENDAR...' : 'CONFIRMAR AGENDAMENTO'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
};

export default AppointmentSection;