/*
 * ARQUIVO: src/pages/AdminDashboard.tsx
 * DESCRIÇÃO: Painel administrativo final, combinando a lógica de abas com a tabela de inscrições melhorada.
 */
import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebaseConfig';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// Tipos de dados
interface Inscricao {
  id: string;
  nomeCompleto: string;
  email: string;
  telefone: string; // Adicionámos o telefone aqui
  assunto: string;
  dataEnvio: Date;
}

interface Agendamento {
  id: string;
  nomeCliente: string;
  telefoneCliente: string;
  servico: string;
  data: string;
  hora: string;
  status: 'Pendente' | 'Confirmado' | 'Cancelado';
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agendamentos' | 'inscricoes'>('agendamentos');
  const [inscricoes, setInscricoes] = useState<Inscricao[]>([]);
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  // Efeito para verificar autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      } else {
        setUserEmail(user.email);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Efeito para buscar todos os dados
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Buscar Inscrições
        const inscricoesQuery = query(collection(db, "inscricoes-curso"), orderBy("dataEnvio", "desc"));
        const inscricoesSnapshot = await getDocs(inscricoesQuery);
        const inscricoesData = inscricoesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          dataEnvio: doc.data().dataEnvio.toDate(), 
        })) as Inscricao[];
        setInscricoes(inscricoesData);

        // Buscar Agendamentos
        const agendamentosQuery = query(collection(db, "agendamentos"), orderBy("data", "desc"));
        const agendamentosSnapshot = await getDocs(agendamentosQuery);
        const agendamentosData = agendamentosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Agendamento[];
        setAgendamentos(agendamentosData);

      } catch (err) {
        console.error("Erro ao buscar dados: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  if (loading) {
    return <div className="min-h-screen bg-light-bg flex justify-center items-center"><p>A carregar dados...</p></div>;
  }

  return (
    <div className="min-h-screen bg-light-bg">
      <header className="bg-light shadow-md">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-dark-text">Painel Administrativo</h1>
            <p className="text-sm text-gray-500">Bem-vindo, {userEmail}</p>
          </div>
          <button onClick={handleLogout} className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600">
            Sair
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Abas de Navegação */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('agendamentos')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'agendamentos' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Agendamentos ({agendamentos.length})
              </button>
              <button
                onClick={() => setActiveTab('inscricoes')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'inscricoes' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Inscrições Curso ({inscricoes.length})
              </button>
            </nav>
          </div>

          {/* Conteúdo das Abas */}
          <div className="mt-8">
            {activeTab === 'agendamentos' && (
              <div className="bg-light rounded-lg shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  {/* Tabela de Agendamentos (sem alterações) */}
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hora</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Serviço</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {agendamentos.map((ag) => (
                        <tr key={ag.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{ag.data}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{ag.hora}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{ag.nomeCliente}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{ag.servico}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              {ag.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'inscricoes' && (
               <div className="bg-light rounded-lg shadow-xl overflow-hidden">
                 <div className="overflow-x-auto">
                   {/* SUA ALTERAÇÃO: Tabela de Inscrições com a nova coluna "Número" */}
                   <table className="min-w-full divide-y divide-gray-200">
                     <thead className="bg-gray-50">
                       <tr>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nome</th>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Número</th>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assunto</th>
                       </tr>
                     </thead>
                     <tbody className="bg-white divide-y divide-gray-200">
                       {inscricoes.map((inscricao) => (
                         <tr key={inscricao.id}>
                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{inscricao.dataEnvio.toLocaleDateString('pt-BR')}</td>
                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{inscricao.nomeCompleto}</td>
                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{inscricao.telefone}</td>
                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{inscricao.email}</td>
                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{inscricao.assunto}</td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
               </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;