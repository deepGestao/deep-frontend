import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [emailSent, setEmailSent] = useState(false); 
  const [email, setEmail] = useState(''); 

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    setEmailSent(true); 
    
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyan-500 p-6">
      <h1 className="font-bold text-2xl text-white mb-4">Recuperar Senha</h1>
      <div className="w-full max-w-md bg-stone-200 px-6 py-6 rounded-lg shadow-lg">
        {emailSent ? ( 
          <div className="text-center">
            <p className="text-green-600 font-semibold text-lg">Um e-mail foi enviado para {email}.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Digite seu e-mail" 
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required // 
              value={email} // 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <button 
              type="submit" 
              className="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300">
              Recuperar Senha
            </button>
          </form>
        )}
      </div>
      <p className="text-white text-sm mt-4">
        Lembrou a senha?{' '}
        <Link to="/" className="underline text-white cursor-pointer text-lg font-bold">
          Voltar para Login
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
