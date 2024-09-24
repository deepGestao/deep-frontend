// src/pages/RegisterPage.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link para navegação
import FormRegister from '../components/FormRegister'; // Importa o FormRegister

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-3/4 w-full bg-cover bg-center hidden md:block" style={{ backgroundImage: `url('/assets/this.jpg')` }} />
      <div className="md:w-1/4 w-full flex flex-col items-center justify-center bg-cyan-500 p-6 min-h-screen">
        <h1 className="font-bold text-2xl text-white mb-4">Faça seu cadastro</h1>
        <div className="w-full max-w-md mt-4 bg-stone-200 px-6 py-6 rounded-lg shadow-lg">
          <FormRegister />
        </div>
        <p className="text-white text-sm w-full mt-2 text-center">
          Já possui uma conta? <Link to="/" className="underline text-white cursor-pointer text-lg font-bold">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
