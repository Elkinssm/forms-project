import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

import TextInput from "./inputs/TextInput";
import DateInput from "./date/DateInput";
import FileInput from "./file/FileInput";
import LanguageSwitcher from "./LanguageSwitcher";

import { fields } from "./inputs/fieldsConfig";
import {
  generateYupSchema,
  generateFileYupSchema,
} from "../../utils/validationScheme";

interface FormData {
  name_fp: string;
  business_address: string;
  start_date: Date | null;
  file: File | null;
}

const Init = () => {
  const { t } = useTranslation();

  const formSchema: yup.ObjectSchema<FormData> = yup.object({
    name_fp: generateYupSchema(
      fields.find((f) => f.name === "name_fp")!.validation,
      t
    ) as yup.StringSchema<string>,
    business_address: generateYupSchema(
      fields.find((f) => f.name === "business_address")!.validation,
      t
    ) as yup.StringSchema<string>,
    start_date: generateYupSchema(
      fields.find((f) => f.name === "start_date")!.validation,
      t
    ) as yup.DateSchema<Date | null>,
    file: generateFileYupSchema(
      fields.find((f) => f.name === "file")!.validation,
      t
    ) as yup.MixedSchema<File | null>,
  });

  const methods = useForm<FormData>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name_fp: "",
      business_address: "",
      start_date: null,
      file: null,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Formulario enviado:", data);
  };

  return (
    <FormProvider {...methods}>
      <Box as="form" onSubmit={methods.handleSubmit(onSubmit)} p={4}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {fields.map((field) => {
            switch (field.type) {
              case "text":
                return (
                  <TextInput
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    helpText={field.helpText}
                    colSpan={field.colSpan}
                    validation={field.validation}
                  />
                );
              case "date":
                return (
                  <DateInput
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    helpText={field.helpText}
                    colSpan={field.colSpan}
                    validation={field.validation}
                  />
                );
              case "file":
                return (
                  <FileInput
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    helpText={field.helpText}
                    colSpan={field.colSpan}
                    validation={field.validation}
                  />
                );
              default:
                return null;
            }
          })}
        </SimpleGrid>

        <Button type="submit" mt={6} colorScheme="blue">
          {t("Submit")}
        </Button>
      </Box>

      <LanguageSwitcher />
    </FormProvider>
  );
};

export default Init;
