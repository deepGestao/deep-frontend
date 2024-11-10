import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmEmailPage = () => {
  const navigate = useNavigate();

  const handleConfirmed = () => {
    // Redireciona para a página Step1 após a confirmação
    navigate('/step-1');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="font-Roboto text-[40px] leading-[46.88px]">Falta Pouco</h1>
        <p className="mt-4 font-Roboto text-[18px] leading-[21.09px]">
          Por favor, verifique seu email para confirmar sua conta.
        </p>
        <button 
          className="mt-6 px-4 py-2 bg-black rounded-[12px] hover:bg-gray-800 transition-colors duration-300 text-white w-full"
          onClick={handleConfirmed}
        >
          Já confirmei
        </button>
      </div>
    </div>
  );
};

export default ConfirmEmailPage;
