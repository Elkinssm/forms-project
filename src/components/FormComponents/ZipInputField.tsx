import React, { useState } from "react";
import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface ZipInputProps<T extends FieldValues> {
  label: string;
  id: string;
  placeholder?: string;
  zipValue?: string;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
}

const ZipInput = <T extends FieldValues>({
  label,
  id,
  placeholder,
  zipValue = "",
  errors,
  register,
}: ZipInputProps<T>) => {
  const [currentValue, setCurrentValue] = useState<string>(zipValue);


  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); 
    if (value.length > 5) {
      value = value.slice(0, 5) + "-" + value.slice(5); 
    }
    setCurrentValue(value); 
  };

  return (
    <FormControl mb={4} isInvalid={!!errors[id]}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        maxLength={10}
        value={currentValue}
        id={id}
        type="text"
        placeholder={placeholder || `Enter your ${label}`}
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
