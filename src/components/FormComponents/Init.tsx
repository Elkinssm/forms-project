import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "./inputs/TextInput";
import DateInput from "./date/DateInput";
import { generateYupSchema } from "../../utils/validationScheme";
import * as yup from "yup";
import { fields } from "./inputs/fieldsConfig";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

interface FormData {
  name_fp: string;
  business_address: string;
  start_date: Date | null;
}

const Init = () => {
  const { t } = useTranslation();

  // Ajusta los tipos de cada propiedad para que coincidan con FormData
  const schemaShape: {
    name_fp: yup.StringSchema<string>;
    business_address: yup.StringSchema<string>;
    start_date: yup.DateSchema<Date | null>;
  } = {
    name_fp: generateYupSchema(
      fields[0].validation,
      t
    ) as yup.StringSchema<string>,
    business_address: generateYupSchema(
      fields[1].validation,
      t
    ) as yup.StringSchema<string>,
    start_date: generateYupSchema(
      fields[2].validation,
      t
    ) as yup.DateSchema<Date | null>,
  };

  const formSchema: yup.ObjectSchema<FormData> = yup.object(schemaShape);

  const methods = useForm<FormData>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name_fp: "",
      business_address: "",
      start_date: null,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Box as="form" onSubmit={methods.handleSubmit(onSubmit)}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {fields.map((field) =>
            field.name === "start_date" ? (
              <DateInput
                key={field.name}
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                helpText={field.helpText}
                colSpan={field.colSpan}
                validation={field.validation}
              />
            ) : (
              <TextInput
                key={field.name}
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                helpText={field.helpText}
                colSpan={field.colSpan}
                validation={field.validation}
              />
            )
          )}
        </SimpleGrid>
        <Button type="submit">{t("Submit")}</Button>
      </Box>
      <LanguageSwitcher />
    </FormProvider>
  );
};

export default Init;
