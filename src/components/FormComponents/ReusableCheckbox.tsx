import React from "react";
import { FormLabel, Checkbox, Text } from "@chakra-ui/react";
import {
  UseFormRegister,
  FieldError,
  Path,
  FieldValues,
} from "react-hook-form";

interface ReusableCheckboxProps<T extends FieldValues> {
  id: Path<T>;
  label: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<T>;
  error?: FieldError;
}
const ReusableCheckbox = <T extends FieldValues>({
  id,
  label,
  isChecked,
  onChange,
  register,
  error,
}: ReusableCheckboxProps<T>) => {
  return (
    <>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <input type="hidden" {...register(id)} value={isChecked ? "yes" : "no"} />
      <Checkbox id={id} isChecked={isChecked} onChange={onChange} />
      {error && <Text color="semantic.error.DEFAULT">{error.message}</Text>}
    </>
  );
};

export default ReusableCheckbox;
