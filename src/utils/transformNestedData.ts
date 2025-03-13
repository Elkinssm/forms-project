export const transformNestedData = <T extends Record<string, unknown>>(
  data: Record<string, unknown>
): T => {
  const result: Record<string, unknown> = {}; // ✅ Tipado seguro

  Object.keys(data).forEach((key) => {
    const path = key.split(".");
    let current: Record<string, unknown> = result; // ✅ Evita `any`

    for (let i = 0; i < path.length - 1; i++) {
      const part = isNaN(Number(path[i])) ? path[i] : Number(path[i]);

      if (typeof current[part] !== "object" || current[part] === null) {
        current[part] = typeof path[i + 1] === "number" ? [] : {}; // ✅ Se asegura que sea un objeto
      }

      current = current[part] as Record<string, unknown>; // ✅ Evita `any` sin perder seguridad
    }

    current[path[path.length - 1]] = data[key];
  });

  return result as T;
};
