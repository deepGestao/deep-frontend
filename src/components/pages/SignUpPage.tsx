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
});

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      signUpSchema.parse({ email, password });
      // Simulando um cadastro bem-sucedido
      navigate('/confirm-email'); // Navegar para a página de confirmação de e-mail após o cadastro
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrorMessage(err.errors[0].message);
      } else {
        setErrorMessage('Erro ao cadastrar. Tente novamente.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-3xl font-semibold text-center text-gray-700">Cadastrar</h2>
        {errorMessage && <p className="text-red-500 text-center mt-2">{errorMessage}</p>}
        <form onSubmit={handleSignUp} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              required
            />
          </div>
          <button type="submit" className="bg-black text-white w-full py-2 rounded">
            Criar Conta
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/" className="text-blue-600 hover:underline">Já possui uma conta? Faça login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
