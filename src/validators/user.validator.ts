import { z } from "zod";

export const userNameSchema = z
  .string("Deve ser tipo texto")
  .min(3, "Mínimo 3 caracteres")
  .max(20, "Máximo 20 caracteres");

export const userSchema = z.object({
  email: z.email("E-mail deve ser válido"),
  nickname: z
    .string("Apelido deve ser tipo texto")
    .min(2, "Apelido deve ter no mínimo 2 caracteres")
    .optional(),
  name: z
    .string("Nome deve ser tipo texto")
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(20, "Nome deve ter no máximo 20 caracteres"),
  age: z
    .number()
    .min(18, "Idade mínima 18 anos")
    .max(150, "Idade máxima 150 anos")
    .optional(),
});

export type User = z.infer<typeof userSchema>;
