import { z } from "zod";

export const cartSchema = z.object({
  customerId: z.uuid(),
  products: z.array(
    z.object({
      name: z.string().min(3),
      price: z.number().min(0),
      quantity: z.number().min(0),
      categories: z.array(z.string()).min(1),
    })
  ),
});

export type Cart = z.infer<typeof cartSchema>;
