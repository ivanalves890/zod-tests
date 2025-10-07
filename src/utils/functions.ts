import type { ZodSafeParseResult } from "zod";

export const printResult = (value: any, schema: any) => {
  const res: ZodSafeParseResult<any> = schema.safeParse(value);

  const { success, error, data } = res;

  if (!success) {
    const message = "Erro: " + (error.issues[0]?.message || "Desconhecido");
    console.error({ value, message });
    return;
  }

  console.log({ value, message: "Sucesso" });
};
