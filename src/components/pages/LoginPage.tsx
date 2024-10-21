// src/pages/LoginPage.tsx
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Caixa externa com sombra */}
      <div className="w-[360px] h-[665px] bg-white border border-gray-300 rounded-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] relative flex items-center justify-center">
        
        {/* Layout interno com sombra e ajustes de tamanho/posição */}
        <div className="w-[320px] h-auto bg-white border border-gray-400 rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.5)] p-6">
          {/* Caixa de Login */}
          <h2 className="text-[40px] font-roboto font-semibold text-center text-black mb-6">
            Deep
          </h2>
          
          {/* Label Email */}
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
            Email
          </label>
          <div className="mb-4">
            <input 
              id="email"
              className="shadow border border-gray-300 rounded-[12px] w-full py-2 px-3 text-gray-700" 
              type="email" 
              placeholder="Email" 
            />
          </div>
          
          {/* Label Senha */}
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
            Senha
          </label>
          <div className="mb-4">
            <input 
              id="password"
              className="shadow border border-gray-300 rounded-[12px] w-full py-2 px-3 text-gray-700" 
              type="password" 
              placeholder="Senha" 
            />
          </div>

          {/* Botão Entrar */}
          <button className="w-full h-[55px] bg-black text-white rounded-[12px] mb-3">
            Entrar
          </button>

          {/* Esqueceu a senha */}
          <div className="text-center mb-3">
            <Link to="/forgot-password" className="font-roboto text-[18px] font-[400] text-black">
              Esqueceu a senha?
            </Link>
          </div>

          {/* Linha separadora com "OU" */}
          <div className="flex items-center justify-center mb-3">
            <div className="border-t border-gray-500 w-[111.02px]"></div>
            <span className="mx-4 text-[#2e2e2e]">ou</span>
            <div className="border-t border-gray-500 w-[111.02px]"></div>
          </div>

          {/* Botão Entrar com Google */}
          <div className="text-center mb-4">
            <a href="https://www.google.com/imghp?hl=pt-BR" target="_blank" rel="noopener noreferrer">
              <button className="w-full h-[55px] bg-white border border-gray-400 rounded-[12px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                <img src="../../assets/icon.png" alt="Google" className="w-[30px] h-[30px] mr-3"/>
                <span className="font-roboto font-bold text-[18px] text-black">
                  Entrar com Google
                </span>
              </button>
            </a>
          </div>

          {/* Cadastro */}
          <div className="text-center">
            <span className="font-roboto text-[18px] text-black whitespace-nowrap">
              Não tem uma conta?
            </span>
            <Link to="/signup" className="font-roboto text-[18px] font-bold text-blue-500 underline ml-1">
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
