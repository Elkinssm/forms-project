import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface ZipInputProps<T extends FieldValues> {
  label: string;
  id: string;
  placeholder?: string;
  isDisabled?: boolean;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
}

const ZipInput = <T extends FieldValues>({
  label,
  id,
  placeholder,
  isDisabled,
  errors,
  register,
}: ZipInputProps<T>) => {
  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 5) {
      value = value.slice(0, 5) + "-" + value.slice(5);
    }
    e.target.value = value;
  };

  return (
    <FormControl mb={4} isInvalid={!!errors[id]}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        maxLength={10}
        id={id}
        type="text"
        placeholder={placeholder || `Enter your ${label}`}
        {...register(id as Path<T>, { onChange: handleZipChange })}
        isDisabled={isDisabled}
      />
      <ErrorMessage error={errors[id]?.message as string} />
    </FormControl>
  );
};

export default ZipInput;
