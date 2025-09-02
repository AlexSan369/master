/*
 * ARQUIVO: src/components/CourseForm.tsx
 * DESCRIÇÃO: Corrigido o erro de sintaxe no componente FormInput.
 */
import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 

// CORREÇÃO: O componente FormInput estava incompleto. Agora está correto.
const FormInput: React.FC<{ 
  label: string; 
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, type = 'text', value, onChange }) => (
  <div>
    <label className="text-sm font-bold text-gray-500">{label}</label>
    <input 
      type={type} 
      value={value}
      onChange={onChange}
      required
      className="w-full mt-1 bg-transparent border-b-2 border-gray-300 focus:border-primary focus:outline-none transition-colors"
    />
  </div>
);


const CourseForm: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const topics = {
        'Quero me matricular': 'Olá, gostaria de saber como faço para me matricular no curso.',
        'Qual é o valor do curso?': 'Olá, gostaria de saber mais sobre os valores e as formas de pagamento do curso.',
        'Tem certificado?': 'Olá, gostaria de saber se o curso oferece certificado de conclusão.',
        'Quando começa a próxima turma?': 'Olá, gostaria de saber quando abre as próximas inscrições.',
        'Outro Assunto': ''
    };

    useEffect(() => {
        if (selectedTopic && topics[selectedTopic as keyof typeof topics]) {
            setMessage(topics[selectedTopic as keyof typeof topics]);
        } else {
            setMessage('');
        }
    }, [selectedTopic]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await addDoc(collection(db, "inscricoes-curso"), {
                nomeCompleto: fullName,
                assunto: selectedTopic,
                telefone: phone,
                email: email,
                mensagem: message,
                dataEnvio: new Date(),
            });

            setIsSuccess(true);
            setFullName('');
            setSelectedTopic('');
            setPhone('');
            setEmail('');
            setMessage('');

        } catch (error) {
            console.error("Erro ao guardar na base de dados: ", error);
            alert("Ocorreu um erro ao enviar a sua inscrição. Por favor, tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-light p-8 md:p-12 shadow-2xl rounded-lg">
            {isSuccess ? (
                <div className="text-center text-green-700">
                    <h3 className="text-2xl font-bold">Inscrição Enviada!</h3>
                    <p className="mt-2">Obrigado pelo seu interesse. Entraremos em contacto em breve para confirmar os detalhes.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormInput 
                            label="NOME COMPLETO" 
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <div>
                            <label className="text-sm font-bold text-gray-500">ASSUNTO</label>
                            <select
                                value={selectedTopic}
                                onChange={(e) => setSelectedTopic(e.target.value)}
                                required
                                className="w-full mt-1 bg-transparent border-b-2 border-gray-300 focus:border-primary focus:outline-none transition-colors"
                            >
                                <option value="" disabled>Selecione um tópico...</option>
                                {Object.keys(topics).map(topic => (
                                    <option key={topic} value={topic}>{topic}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormInput 
                            label="TELEFONE" 
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <FormInput 
                            label="ENDEREÇO DE EMAIL" 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-bold text-gray-500">POR FAVOR, DIGITE A SUA MENSAGEM AQUI...</label>
                        <textarea 
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full mt-1 bg-transparent border-b-2 border-gray-300 focus:border-primary focus:outline-none transition-colors"
                        ></textarea>
                    </div>
                    <div className="text-left">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-primary text-dark-text font-bold py-3 px-8 rounded-sm hover:opacity-90 transition-opacity duration-300 disabled:bg-gray-400"
                        >
                            {isLoading ? 'A ENVIAR...' : 'INSCREVA-SE AGORA'}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default CourseForm;