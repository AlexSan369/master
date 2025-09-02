/*
ARQUIVO: src/components/BookingSystem.tsx
DESCRIÇÃO: Sistema de agendamento com verificação de disponibilidade em tempo real.
*/

import React, { useState, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';
import { db } from '../firebaseConfig';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';

// Estrutura de dados
const barbeiros = [ { id: 'cicero', nome: 'Cícero' }, { id: 'andre', nome: 'André' }, { id: 'joao', nome: 'João' }, { id: 'vitor', nome: 'Vitor' } ];
const servicos = [
{ nome: 'Degradê', preco: 30 }, { nome: 'Social', preco: 30 }, { nome: 'Cabelo e Barba', preco: 60 },
{ nome: 'Barba', preco: 30 }, { nome: 'Sobrancelhas', preco: 15 }, { nome: 'Botox Capilar', preco: 80 },
];
const todosOsHorarios = [ '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00' ];

const BookingSystem: React.FC = () => {
// Estados para controlar o fluxo de múltiplos passos
const [step, setStep] = useState(1);
const [selectedService, setSelectedService] = useState<{ nome: string; preco: number } | null>(null);
const [selectedBarber, setSelectedBarber] = useState<{ id: string; nome: string } | null>(null);
const [selectedDate, setSelectedDate] = useState<Date | undefined>();
const [selectedTime, setSelectedTime] = useState('');
// Estados para os dados do cliente
const [clientName, setClientName] = useState('');
const [clientPhone, setClientPhone] = useState('');

// Estados para a lógica de disponibilidade e feedback
const [horariosOcupados, setHorariosOcupados] = useState<string[]>([]);
const [loadingHorarios, setLoadingHorarios] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);

// EFEITO: Busca os horários ocupados sempre que o barbeiro ou a data mudam
useEffect(() => {
    const fetchHorariosOcupados = async () => {
        if (!selectedBarber || !selectedDate) return;

        setLoadingHorarios(true);
        const dataFormatada = format(selectedDate, 'yyyy-MM-dd');
        
        const q = query(
            collection(db, 'agendamentos'),
            where('barbeiroId', '==', selectedBarber.id),
            where('data', '==', dataFormatada)
        );

        const querySnapshot = await getDocs(q);
        const horariosJaAgendados = querySnapshot.docs.map(doc => doc.data().hora);
        
        setHorariosOcupados(horariosJaAgendados);
        setLoadingHorarios(false);
    };

    fetchHorariosOcupados();
}, [selectedBarber, selectedDate]);


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        await addDoc(collection(db, "agendamentos"), {
            clienteNome: clientName,
            clienteTelefone: clientPhone,
            servicoNome: selectedService?.nome,
            preco: selectedService?.preco,
            barbeiroId: selectedBarber?.id,
            barbeiroNome: selectedBarber?.nome,
            data: format(selectedDate!, 'yyyy-MM-dd'),
            hora: selectedTime,
            status: 'Pendente',
            dataAgendamento: new Date(),
        });

        alert('Agendamento realizado com sucesso!');
        setStep(1);
        setSelectedService(null);
        setSelectedBarber(null);
        setSelectedDate(undefined);
        setSelectedTime('');
        setClientName('');
        setClientPhone('');

    } catch (error) {
        console.error("Erro ao criar agendamento: ", error);
        alert("Não foi possível realizar o agendamento. Tente novamente.");
    } finally {
        setIsSubmitting(false);
    }
};

const handleNextStep = () => setStep(prev => prev + 1);
const handlePrevStep = () => setStep(prev => prev - 1);

return (
    <section id="agendar-horario" className="bg-light-bg py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark-text">
                AGENDE SEU <span className="text-primary">HORÁRIO</span>
            </h2>

            <div className="mt-12 bg-light p-8 rounded-lg shadow-xl text-left">
                {step === 1 && (
                    <div>
                        <h3 className="text-2xl font-bold text-dark-text mb-6">Passo 1: Escolha o Serviço</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {servicos.map(s => (
                                <button key={s.nome} onClick={() => { setSelectedService(s); handleNextStep(); }}
                                    className="p-4 border-2 border-gray-200 rounded-lg text-center font-semibold hover:border-primary">
                                    {s.nome} - R$ {s.preco}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <button onClick={handlePrevStep} className="text-sm text-gray-600 mb-4">&larr; Voltar</button>
                        <h3 className="text-2xl font-bold text-dark-text mb-6">Passo 2: Escolha o Barbeiro</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {barbeiros.map(b => (
                                <button key={b.id} onClick={() => { setSelectedBarber(b); handleNextStep(); }}
                                    className="p-4 border-2 border-gray-200 rounded-lg text-center font-semibold hover:border-primary">
                                    {b.nome}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div>
                         <button onClick={handlePrevStep} className="text-sm text-gray-600 mb-4">&larr; Voltar</button>
                         <h3 className="text-2xl font-bold text-dark-text mb-6">Passo 3: Escolha a Data e Hora</h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <div className="flex justify-center">
                                <DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate} locale={ptBR} fromDate={new Date()} />
                            </div>
                            {selectedDate && (
                                <div>
                                    <h4 className="font-bold mb-4">Horários disponíveis para {format(selectedDate, 'dd/MM/yyyy')}:</h4>
                                    {loadingHorarios ? <p>A verificar disponibilidade...</p> : (
                                        <div className="grid grid-cols-3 gap-2">
                                            {todosOsHorarios.map(h => {
                                                const isBooked = horariosOcupados.includes(h);
                                                return (
                                                    <button key={h} onClick={() => { setSelectedTime(h); handleNextStep(); }} 
                                                        disabled={isBooked}
                                                        className={`p-2 border rounded-md transition-colors ${isBooked ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'hover:bg-primary hover:text-dark-text'}`}>
                                                        {h}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {step === 4 && (
                     <div>
                        <button onClick={handlePrevStep} className="text-sm text-gray-600 mb-4">&larr; Voltar</button>
                        <h3 className="text-2xl font-bold text-dark-text mb-6">Passo 4: Confirme Seus Dados</h3>
                        <div className="bg-light-bg p-4 rounded-md mb-6 space-y-1">
                            <p><strong>Serviço:</strong> {selectedService?.nome} (R$ {selectedService?.preco})</p>
                            <p><strong>Barbeiro:</strong> {selectedBarber?.nome}</p>
                            <p><strong>Data:</strong> {selectedDate?.toLocaleDateString('pt-BR')}</p>
                            <p><strong>Hora:</strong> {selectedTime}</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="font-bold text-gray-700">Seu Nome</label>
                                <input type="text" value={clientName} onChange={e => setClientName(e.target.value)} required className="w-full mt-2 p-3 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="font-bold text-gray-700">Seu Telefone</label>
                                <input type="tel" value={clientPhone} onChange={e => setClientPhone(e.target.value)} required className="w-full mt-2 p-3 border border-gray-300 rounded-md" />
                            </div>
                            <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-dark-text font-bold py-3 px-8 rounded-sm disabled:bg-gray-400">
                                {isSubmitting ? 'A CONFIRMAR...' : 'CONFIRMAR AGENDAMENTO'}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    </section>
);
};

export default BookingSystem;