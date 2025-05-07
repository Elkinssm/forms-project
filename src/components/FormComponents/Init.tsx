import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "./inputs/TextInput";
import { generateYupSchema } from "../../utils/validationScheme";
import * as yup from "yup";
import { fields } from "./inputs/fieldsConfig";
import LanguageSwitcher from "./LanguageSwitcher";

interface FormData {
  name_fp: string;
  business_address: string;
}

const Init = () => {
  // Generar el esquema de validación dinámico
  const formSchema: yup.ObjectSchema<FormData> = yup.object(
    fields.reduce((acc, field) => {
      acc[field.name as keyof FormData] = generateYupSchema(field.validation);
      return acc;
    }, {} as Record<keyof FormData, yup.StringSchema<string>>)
  );

  const methods = useForm<FormData>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name_fp: "", // Valores predeterminados como strings vacíos
      business_address: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Box as="form" onSubmit={methods.handleSubmit(onSubmit)}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {fields.map((field) => (
            <TextInput
              key={field.name}
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              helpText={field.helpText}
              colSpan={field.colSpan}
              validation={field.validation}
            />
          ))}
        </SimpleGrid>
        <Button type="submit">Submit</Button>
      </Box>
      <LanguageSwitcher />
    </FormProvider>
  );
};

export default Init;
