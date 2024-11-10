import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Ícones para navegação

const Step2Page = () => {
  const location = useLocation();
  const { name } = location.state || { name: 'Usuário' };
  const [cpf, setCpf] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (cpf.trim() !== '') {
      navigate('/step-3', { state: { name, cpf } });
    } else {
      alert('Por favor, digite seu CPF ou CNPJ.');
    }
  };

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
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#D1D5DB] text-white font-bold">
              3
            </div>
            <span className="text-sm">Etapa 3</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-[#D1D5DB] text-white font-bold">
              4
            </div>
            <span className="text-sm">Etapa 4</span>
          </div>
        </div>

        {/* Formulário de Etapa 2 */}
        <h1 className="font-Roboto text-center text-[40px] leading-[46.88px]">Ola, {name}!</h1>
        <p className="mt-4 font-Roboto text-left text-[18px] leading-[21.09px]">
          Qual é o seu CPF ou CNPJ?
        </p>
        <input
          type="text"
          className="border border-gray-300 p-2 rounded mb-4 w-full"
          placeholder="Digite seu CPF ou CNPJ"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <button
          onClick={handleNext}
          className="w-full h-[55px] bg-black text-white rounded-[12px] mb-3 hover:bg-gray-800 transition-colors duration-300"
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Step2Page;
