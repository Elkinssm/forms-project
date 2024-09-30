import React from "react";
import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

interface ZipInputProps<T extends FieldValues> {
  mask: string;
  zipValue: string;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
  handleZipChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ZipInput = <T extends FieldValues,>({
  mask,
  zipValue,
  errors,
  register,
  handleZipChange,
}: ZipInputProps<T>) => {
  return ( // TODO, el label, id y paceholder debe conctenar el label  debe llegar por parametros, la mascara es igual para todos los zip XXXXX o XXXXX-XXXX, debe validarse si digito 5 o 9 caracteres ... 
    <FormControl mb={4} isInvalid={!!errors.merchZip}>
      <FormLabel htmlFor="merchZip">Location Zip</FormLabel>
      <Input
        as={InputMask}
        mask={mask}
        maskChar={null}
        value={zipValue}
        id="merchZip"
        type="text"
   //     placeholder={`Enter your ${label}`}
        {...register("merchZip" as Path<T>)}
        onChange={handleZipChange}
      />
      {errors.merchZip && (
        <Text color="semantic.error.DEFAULT">
          {errors.merchZip.message as string}
        </Text>
      )}
    </FormControl>
  );
};

export default ZipInput;
