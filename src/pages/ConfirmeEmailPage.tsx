import { Link } from 'react-router-dom';

const ConfirmEmailPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyan-500 p-6">
      <h1 className="font-bold text-2xl text-white mb-4">Confirmação de E-mail</h1>
      <div className="w-full max-w-md bg-stone-200 px-6 py-6 rounded-lg shadow-lg">
        <p className="text-center">Verifique sua caixa de entrada e siga as instruções enviadas.</p>
        <Link to="/" className="underline text-blue-500 text-center block mt-4">
          Voltar para o Login
        </Link>
      </div>
    </div>
  );
};

export default ConfirmEmailPage;
