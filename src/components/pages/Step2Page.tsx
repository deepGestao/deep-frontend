// src/pages/Step2Page.tsx
import { useLocation, useNavigate } from 'react-router-dom';

const Step2Page = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Recupera o nome do estado passado via navegação
  const { name } = location.state || { name: 'Usuário' };

  const handleNext = () => {
    navigate('/step-3', { state: { name } }); // Passa o nome para a próxima página
  };

  const handlePrevious = () => {
    navigate('/step-1'); // Volta para a página Step 1
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-300">
      <h1 className="text-xl font-semibold mb-4">Olá, {name}!</h1> {/* Exibe o nome */}
      <p>Qual o seu CPF ou CNPJ?</p>
      <input
        type="text"
        className="border border-gray-300 p-2 rounded mb-4"
        placeholder="Digite seu CPF ou CNPJ"
      />
      <div className="flex space-x-4">
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
          Continuar
        </button>
        </div>
      </div>
    </div>
  );
};

export default Step2Page;
