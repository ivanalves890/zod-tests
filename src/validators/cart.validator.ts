import { z } from "zod";

export const cartSchema = z.object({
  customerId: z.uuid(),
  products: z.array(
    z.object({
      name: z
        .string("Nome do produto deve ser tipo texto")
        .min(3, "Nome do produto deve ter no mínimo 3 caracteres"),
      price: z
        .number("Preço deve ser tipo número")
        .min(0, "Preço deve ser no mínimo 0"),
      quantity: z
        .number("Quantidade deve ser tipo número")
        .min(0, "Quantidade deve ser no mínimo 0"),
      categories: z
        .array(z.string("Categoria deve ser do tipo texto"))
        .min(1, "O produto deve ter no mínimo 1 categoria"),
    })
  ),
});

export type Cart = z.infer<typeof cartSchema>;
