import { useState } from "react";
import FormRegister from "./components/FormRegister";
import FormLogin from "./components/FormLogin";

function App() {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login e cadastro

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Coluna da Imagem */}
      <div
        className={`hidden md:block md:w-3/4 w-full bg-cover bg-center`}
        style={{
          backgroundImage: `url('/assets/this.jpg')`,
          backgroundSize: 'cover', // Cobrir o espaço sem distorções
          backgroundRepeat: 'no-repeat', // Evitar repetição da imagem
          backgroundPosition: 'center', // Centralizar a imagem
        }}
      />

      {/* Coluna do Formulário */}
      <div className="md:w-1/4 w-full flex flex-col items-center justify-center bg-cyan-500 p-6 min-h-screen">
        {isLogin ? (
          <>
            <h1 className="font-bold text-2xl text-white mb-4">Faça seu login</h1>
            <div className="w-full max-w-md mt-4 bg-stone-200 px-6 py-6 rounded-lg shadow-lg">
              <FormLogin />
            </div>
            <p className="text-white text-sm w-full mt-2 text-center">
              Não possui conta?{" "}
              <span
                className="underline text-white cursor-pointer text-lg font-bold"
                onClick={() => setIsLogin(false)}
              >
                Cadastre-se
              </span>
            </p>
          </>
        ) : (
          <>
            <h1 className="font-bold text-2xl text-white mb-4">Faça seu cadastro</h1>
            <div className="w-full max-w-md mt-4 bg-stone-200 px-6 py-6 rounded-lg shadow-lg">
              <FormRegister />
            </div>
            <p className="text-white text-sm w-full mt-2 text-center">
              Já possui uma conta?{" "}
              <span
                className="underline text-white cursor-pointer text-lg font-bold"
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
