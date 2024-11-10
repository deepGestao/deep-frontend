import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Ícones para navegação

const plans = [
  {
    title: 'Experiência Completa',
    price: 'R$ 150 / mês',
    benefits: [
      'Gerencia o fluxo de caixa',
      'Gerencia o estoque',
      'Emissor de nota fiscal',
      'Painéis de desempenho',
    ],
  },
  {
    title: 'Plano Básico',
    price: 'R$ 100 / mês',
    benefits: [
      'Gerencia o fluxo de caixa',
      'Relatórios mensais',
    ],
  },
  {
    title: 'Plano Avançado',
    price: 'R$ 200 / mês',
    benefits: [
      'Tudo do plano completo',
      'Suporte prioritário',
      'Consultoria mensal',
    ],
  },
];

const Step4Page = () => {
  const location = useLocation();
  const { name, cpf, address } = location.state || { name: 'Usuário', cpf: '', address: '' };
  const [currentPlan, setCurrentPlan] = useState(0); // Controla o plano selecionado
  const navigate = useNavigate();

  const handleTest = () => {
    alert('Você está testando o plano: ' + plans[currentPlan].title + ' por 7 dias!');
    // Lógica para iniciar o teste gratuito
  };

  const handleSelectPlan = (index: number) => {
    setCurrentPlan(index); // Atualiza o plano selecionado
  };

  const { title, price, benefits } = plans[currentPlan];

  const handleGoBack = () => {
    // Navegação para a etapa anterior, por exemplo, para a página anterior
    navigate(-1);  // Navega para a página anterior
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-300">
        
        {/* Ícone para voltar */}
        <div className="absolute top-4 left-4">
          <button
            onClick={handleGoBack}
            className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
          >
            <FiChevronLeft className="text-xl text-black" />
          </button>
        </div>

        {/* Barra de Etapas */}
        <div className="flex justify-between mb-6">
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#1D4ED8] text-white font-bold">
              1
            </div>
            <span className="text-sm">Etapa 1</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#1D4ED8] text-white font-bold">
              2
            </div>
            <span className="text-sm">Etapa 2</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#1D4ED8] text-white font-bold">
              3
            </div>
            <span className="text-sm">Etapa 3</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#1D4ED8] text-white font-bold">
              4
            </div>
            <span className="text-sm">Etapa 4</span>
          </div>
        </div>

        {/* Título e Instruções */}
        <h1 className="font-bold text-center text-[40px] leading-[46.88px]">Escolha seu plano, {name}!</h1>
        <p className="mt-4 text-center text-[18px] leading-[21.09px]">
          Selecione o plano que você deseja.
        </p>

        {/* Navegação dos Planos */}
        <div className="mt-6 flex items-center justify-center space-x-6">
          <button
            onClick={() => setCurrentPlan(currentPlan === 0 ? plans.length - 1 : currentPlan - 1)}
            className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
          >
            <FiChevronLeft className="text-xl text-black" />
          </button>
          
          {/* Exibição do Plano Selecionado */}
          <div className="flex flex-col items-center bg-gray-50 p-6 border rounded-lg shadow-md w-[250px]">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-xl text-indigo-600">{price}</p>
            <ul className="mt-4 space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="text-sm text-gray-700">- {benefit}</li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => setCurrentPlan(currentPlan === plans.length - 1 ? 0 : currentPlan + 1)}
            className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
          >
            <FiChevronRight className="text-xl text-black" />
          </button>
        </div>

        {/* Botão Testar */}
        <div className="mt-8">
          <button
            onClick={handleTest}
            className="w-full h-[55px] bg-black text-white rounded-[12px] mb-3 hover:bg-gray-800 transition-colors duration-300"
          >
            Testar por 7 dias de graça
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4Page;
