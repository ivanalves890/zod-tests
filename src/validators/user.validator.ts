import { z } from "zod";

export const userNameSchema = z
  .string("Deve ser tipo texto")
  .min(3, "Mínimo 3 caracteres")
  .max(20, "Máximo 20 caracteres");

export const userSchema = z.object({
  name: z
    .string("Deve ser tipo texto")
    .min(3, "Mínimo 3 caracteres")
    .max(20, "Máximo 20 caracteres"),
  email: z.email("E-mail deve ser válido"),
});

export type User = z.infer<typeof userSchema>;
