import Form from "./components/Form";

function App() {
  return (
    <div className="min-h-screen flex">
      {/* Coluna da Imagem */}
      <div
        className="md:w-3/4 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/this.jpg')`, 
          backgroundSize: 'contain',
        }}
      />

      {/* Coluna do Formulário */}
      <div className="md:w-1/5 flex-1  flex flex-col items-center justify-center bg-slate-900 p-4">
        <h1 className="font-bold text-[2rem] text-white">Faça seu cadastro</h1>
        <div className="w-full max-w-md mt-4 bg-stone-200 px-4 py-5 rounded-lg">
          <Form />
        </div>
        <p className="text-slate-100 text-xs w-full mt-2 text-center">
          Já possui cadastro? Fazer <a href="/login" className="underline text-blue-500">Login</a>
        </p>
      </div>
    </div>
  );
}

export default App;
