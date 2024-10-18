// src/pages/Step1Page.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step1Page = () => {
  const [name, setName] = useState(''); // Estado para armazenar o nome
  const navigate = useNavigate();

  const handleNext = () => {
    if (name.trim() !== '') {
      // Passa o nome como estado ao navegar para a próxima página
      navigate('/step-2', { state: { name } });
    } else {
      alert('Por favor, digite seu nome.');
    }
  };

  return (
    
<div className="flex flex-col items-center justify-center min-h-screen">
<div  className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-300">
      <h1 className="text-xl font-semibold mb-4">Bem-vindo!</h1>
      <p>Como posso te chamar?</p>
      <input
        type="text"
        className="border border-gray-300 p-2 rounded mb-4"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)} // Atualiza o nome conforme o usuário digita
      />
      <button
        onClick={handleNext}
        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
      >
        Continuar
      </button>
    </div>
    
    </div>
  );
};

export default Step1Page;
