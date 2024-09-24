import { User } from "../types/User";
import { z } from "zod";

export const userRegisterSchema = z.object({
  email: z.string().email("E-mail inválido").nonempty("O e-mail é obrigatório"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z.string().min(6, "A confirmação da senha deve ter pelo menos 6 caracteres"),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "As senhas não coincidem",
});

export const userLoginSchema = z.object({
  email: z.string().email("E-mail inválido").nonempty("O e-mail é obrigatório"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});
