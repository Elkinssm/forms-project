import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import {
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface ZipInputProps<T extends FieldValues> {
  label: string;
  id: string;
  placeholder?: string;
  isReadOnly?: boolean;
  value?: string;
  errors: any;
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
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 5) {
      value = value.slice(0, 5) + "-" + value.slice(5);
    }
    e.target.value = value;
  };

  type ErrorObject = {
    [key: string]: any;
  };

  function getValue(obj: ErrorObject, path: string): any {
    return path.split('.').reduce((acc, part) => {
      if (acc && acc[part] !== undefined) {
        return acc[part];
      }
      return undefined;
    }, obj);
  }
  
  // useEffect(() => {
  //   console.log("errors", errors);
  //   console.log("id", id);
    
  //   console.log("igetValued", getValue(errors,id));
  // });
  

  return (
    <FormControl mb={4} isInvalid={!!errors}>
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
      <ErrorMessage error={getValue(errors,id)?.message as string} />
    </FormControl>
  );
};

export default ZipInput;
