import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { userLoginSchema } from "../utils/validate";

const FormLogin = () => {
  const [formData, setFormData] = useState<User>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const parsed = userLoginSchema.safeParse(formData);

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

    // Lógica de login (ex: AWS Cognito)
    alert("Login realizado com sucesso!");
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-black" htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Insira seu e-mail"
          className="rounded-lg py-2 px-3 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
        />
        {errors.email && <small className="text-red-500">{errors.email}</small>}
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold text-black" htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          placeholder="Digite sua senha"
          className="rounded-lg py-2 px-3 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
        />
        {errors.password && <small className="text-red-500">{errors.password}</small>}
      </div>

      <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg">
        Login
      </button>
    </form>
  );
};

export default FormLogin;
