import React from "react";
import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import InputMask from "react-input-mask";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface ZipInputProps<T extends FieldValues> {
  label: string;
  id: string;
  zipValue: string;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
  handleZipChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ZipInput = <T extends FieldValues>({
  label,
  id,
  zipValue,
  errors,
  register,
  handleZipChange,
}: ZipInputProps<T>) => {
  const mask = "99999-9999";
  const formatZipValue = (value: string) => {
    const numericValue = value.replace(/\D/g, ""); 
    if (numericValue.length > 5) {
      return numericValue.slice(0, 5) + "-" + numericValue.slice(5, 9);
    }
    return numericValue;
  };

  return (
    <FormControl mb={4} isInvalid={!!errors[id]}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        as={InputMask}
        mask={mask}
        maskChar={null}
        value={formatZipValue(zipValue)}
        id={id}
        type="text"
        placeholder={`Enter your ${label}`}
        {...register(id as Path<T>)}
        onChange={handleZipChange}
      />
      {errors[id] && (
        <Text color="red.500">{errors[id]?.message as string}</Text>
      )}
    </FormControl>
  );
};

export default ZipInput;
