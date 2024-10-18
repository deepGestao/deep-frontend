// src/pages/LoginPage.tsx
import { Link } from 'react-router-dom';


const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-3xl font-semibold text-center text-gray-700">Login</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" 
              type="email" 
              placeholder="Email" 
            />
          </div>
          <div className="mb-6">
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" 
              type="password" 
              placeholder="Senha" 
            />
          </div>
          <button className="bg-black text-white w-full py-2 rounded">Entrar</button>
          <div className="text-center mt-4">
            <button className="bg-white border w-full py-2 rounded flex items-center justify-center">
              <img src="../../assets/google.png" alt="Google" className="w-6 h-6 mr-2"/>
              Entrar com Google
            </button>
          </div>
          <div className="mt-4 text-center">
            <Link to="/signup" className="text-blue-500">Não tem uma conta? Cadastre-se</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
