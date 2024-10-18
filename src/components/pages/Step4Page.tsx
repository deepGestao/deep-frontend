import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
  const navigate = useNavigate();
  const [currentPlan, setCurrentPlan] = useState(0);

  const handleNext = () => {
    setCurrentPlan((prev) => (prev + 1) % plans.length);
  };

  const handlePrevious = () => {
    setCurrentPlan((prev) => (prev - 1 + plans.length) % plans.length);
  };

  const handleTest = () => {
    alert('Você está testando o plano: ' + plans[currentPlan].title);
    // Aqui você pode adicionar a lógica para iniciar o teste gratuito
  };

  const handleBackToLogin = () => {
    navigate('/'); // Navega para a tela de login
  };

  const { title, price, benefits } = plans[currentPlan];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Escolha seu plano</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-lg text-indigo-600">{price}</p>
        <ul className="my-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-left mb-2">
              - {benefit}
            </li>
          ))}
        </ul>
        <button
          onClick={handleTest}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mb-2"
        >
          TESTAR POR 7 DIAS DE GRAÇA
        </button>
      </div>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={handlePrevious}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Voltar
        </button>
        <button
          onClick={handleNext}
          className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
        >
          Próximo
        </button>
      </div>
      <button
        onClick={handleBackToLogin}
        className="mt-4 text-blue-500 hover:underline"
      >
        Voltar para Login
      </button>
    </div>
  );
};

export default Step4Page;
