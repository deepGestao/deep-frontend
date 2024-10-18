// src/components/pages/ConfirmPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmEmailPage = () => {
  const navigate = useNavigate();

  const handleConfirmed = () => {
    // Redireciona para a página Step1 após a confirmação
    navigate('/step-1');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Confirmação de Email</h1>
      <p className="mt-4">Por favor, verifique seu email para confirmar sua conta.</p>
      <button 
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleConfirmed}
      >
        Já confirmei
      </button>
    </div>
  );
};

export default ConfirmEmailPage;
