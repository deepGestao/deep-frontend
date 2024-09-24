import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { userRegisterSchema } from "../utils/validate";

const FormRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string } | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors(null);

    const data: User = { email, password, confirmPassword };
    const parsed = userRegisterSchema.safeParse(data);

    if (!parsed.success) {
      const newErrors: { [key: string]: string } = {};
      parsed.error.errors.forEach((error) => {
        if (error.path[0]) {
          newErrors[error.path[0]] = error.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    // Limpa os campos após o envio
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    alert("Obrigado por se Cadastrar!");
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-black" htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="Insira seu e-mail"
          className="rounded-lg py-2 px-3 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors?.email && (
          <small className="text-xs text-red-500 mt-1">{errors.email}</small>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold text-black" htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
          placeholder="Digite sua senha"
          className="rounded-lg py-2 px-3 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors?.password && (
          <small className="text-xs text-red-500 mt-1">{errors.password}</small>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold text-black" htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
          className="rounded-lg py-2 px-3 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {password !== confirmPassword && (
          <small className="text-xs text-red-500 mt-1">As senhas não coincidem</small>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 font-medium text-sm py-2 px-4 rounded-lg text-white"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default FormRegister;
