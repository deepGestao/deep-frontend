import { Link } from 'react-router-dom';
import FormLogin from '../components/FormLogin';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-3/4 w-full bg-cover bg-center hidden md:block" style={{ backgroundImage: `url('/assets/this.jpg')` }} />
      <div className="md:w-1/4 w-full flex flex-col items-center justify-center bg-cyan-500 p-6 min-h-screen">
        <h1 className="font-bold text-2xl text-white mb-4">Faça seu login</h1>
        <div className="w-full max-w-md mt-4 bg-stone-200 px-6 py-6 rounded-lg shadow-lg">
          <FormLogin />
        </div>
        <p className="text-white text-sm w-full mt-2 text-center">
          Não possui conta? <Link to="/register" className="underline text-white cursor-pointer text-lg font-bold">Cadastre-se</Link>
        </p>
        <p className="text-white text-sm w-full mt-2 text-center">
          Esqueceu a senha? <Link to="/forgot-password" className="underline text-white cursor-pointer text-lg font-bold">Recuperar Senha</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
