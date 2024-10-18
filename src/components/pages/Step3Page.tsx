// src/pages/Step3Page.tsx
import { useNavigate } from 'react-router-dom';

const Step3Page = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/step-4'); // Navega para a página Step 4
  };

  const handlePrevious = () => {
    navigate('/step-2'); // Volta para a página Step 2
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div  className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-300">
      <h1 className="text-xl font-semibold mb-4">Quase lá!</h1>
      <p>Qual o seu endereço?</p>
      <input
        type="text"
        className="border border-gray-300 p-2 rounded mb-4"
        placeholder="Digite seu endereço"
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

export default Step3Page;
