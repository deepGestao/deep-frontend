// src/components/pages/SignUpPage.tsx
import { z } from 'zod';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const signUpSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .regex(/[a-z]/, 'A senha deve conter uma letra minúscula')
    .regex(/[A-Z]/, 'A senha deve conter uma letra maiúscula')
    .regex(/[0-9]/, 'A senha deve conter um número')
    .regex(/[\W_]/, 'A senha deve conter um caractere especial'),
  confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatória'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword'],
});

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      signUpSchema.parse({ email, password, confirmPassword });
      navigate('/confirm-email');
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrorMessage(err.errors[0].message);
      } else {
        setErrorMessage('Erro ao cadastrar. Tente novamente.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300 p-4"> {/* Adicionando padding externo */}
      <div className="w-[360px] h-auto bg-white border border-gray-300 rounded-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-6">
        
        <h2 className="text-[40px] font-roboto font-semibold text-center text-black mb-6">Cadastrar</h2>
        {errorMessage && <p className="text-red-500 text-center mt-2">{errorMessage}</p>}
        
        <form onSubmit={handleSignUp} className="w-full mt-6">
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow border border-gray-300 rounded-[12px] w-full py-2 px-3 text-gray-700"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow border border-gray-300 rounded-[12px] w-full py-2 px-3 text-gray-700"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600">Confirmação de Senha</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow border border-gray-300 rounded-[12px] w-full py-2 px-3 text-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full h-[55px] bg-black text-white rounded-[12px] mb-3 hover:bg-gray-800 transition-colors duration-300"
          >
            Criar Conta
          </button>
        </form>
        
        <div className="mt-4 bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200 w-full">
          <h3 className="font-roboto text-[18px] text-black">A senha deve ter:</h3>
          <ul className="font-roboto text-[15px] text-black list-disc list-inside ml-2">
            <li>1 letra minúscula</li>
            <li>1 letra maiúscula</li>
            <li>1 número</li>
            <li>1 caractere especial (ex: !@#$%)</li>
            <li>Mínimo de 8 caracteres</li>
          </ul>
        </div>
        
        <div className="text-center mt-4">
          <span className="font-roboto text-[18px] text-black">Já possui uma conta?</span>
          <Link to="/" className="font-roboto text-[18px] font-bold text-blue-500 underline ml-1">Faça login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
