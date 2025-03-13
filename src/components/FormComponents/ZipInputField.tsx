import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface ZipInputProps<T extends FieldValues> {
  label: string;
  id: string;
  placeholder?: string;
  isReadOnly?: boolean;
  value?: string;
  errors: Record<string, unknown>; // 👈 Corrección aquí
  register: UseFormRegister<T>;
}

const ZipInput = <T extends FieldValues>({
  label,
  id,
  placeholder,
  isReadOnly,
  value,
  errors,
  register,
}: ZipInputProps<T>) => {
  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let zipValue = e.target.value.replace(/\D/g, "");
    if (zipValue.length > 5) {
      zipValue = zipValue.slice(0, 5) + "-" + zipValue.slice(5);
    }
    e.target.value = zipValue;
  };

  /**
   * Función para obtener valores anidados en `errors`
   */
  function getValue(obj: Record<string, unknown>, path: string): unknown {
    return path.split(".").reduce<unknown>((acc, part) => {
      if (typeof acc === "object" && acc !== null && part in acc) {
        return (acc as Record<string, unknown>)[part];
      }
      return undefined;
    }, obj);
  }

  return (
    <FormControl mb={4} isInvalid={!!getValue(errors, id)}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        maxLength={10}
        id={id}
        type="text"
        value={value}
        placeholder={placeholder || `Enter your ${label}`}
        {...register(id as Path<T>, { onChange: handleZipChange })}
        isReadOnly={isReadOnly}
      />
      <ErrorMessage
        error={(getValue(errors, id) as { message?: string })?.message}
      />
    </FormControl>
  );
};

export default ZipInput;
