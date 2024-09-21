import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validate";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setErrors(null);

    const data: User = {
      email,
      password,
    };

    const validateErrors = validate(data);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setEmail("");
    setPassword("");

    alert("Obrigado por se Cadastrar!");
  };

  const [errors, setErrors] = useState<User | null>(null);

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm text-black" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          placeholder="Insira seu e-mail"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-stone-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {errors?.email && (
          <small className="text-xs text-red-500 mt-1">{errors?.email} </small>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-sm text-black" htmlFor="senha">
          Senha
        </label>
        <input
          id="senha"
          type="password"
          placeholder="Digite sua senha"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-stone-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errors?.password && (
          <small className="text-xs text-red-500 mt-1">
            {errors?.password}{" "}
          </small>
        )}
      </div>
      <button
        type="submit"
        className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default Form;
