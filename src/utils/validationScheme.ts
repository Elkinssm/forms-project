import * as yup from "yup";
import { FieldConfig } from "../components/FormComponents/inputs/fieldsConfig";
import { TFunction } from "i18next";

export interface ValidationRules {
  required?: boolean;
  rule?: string;
  minLength?: number;
  maxLength?: number;
  minDate?: Date;
  maxDate?: Date;
}

export const generateYupSchema = (
  validation: FieldConfig["validation"],
  t: TFunction
):
  | yup.StringSchema<string, yup.AnyObject>
  | yup.DateSchema<Date | null, yup.AnyObject> => {
  if (validation?.minDate || validation?.maxDate) {
    // Validación para fechas
    return getDateValidationSchema(validation, t);
  }

  // Validación para cadenas
  let schema = yup.string().defined();

  if (validation?.required) {
    schema = schema.required(t("Este campo es obligatorio."));
  }

  if (validation?.minLength) {
    schema = schema.min(
      validation.minLength,
      t("La longitud mínima es de {{count}} caracteres.", {
        count: validation.minLength,
      })
    );
  }

  if (validation?.maxLength) {
    schema = schema.max(
      validation.maxLength,
      t("La longitud máxima es de {{count}} caracteres.", {
        count: validation.maxLength,
      })
    );
  }

  if (validation?.rule) {
    schema = schema.matches(
      new RegExp(validation.rule),
      t("Formato inválido.")
    );
  }

  return schema;
};

export const getDateValidationSchema = (
  validation: ValidationRules,
  t: TFunction
): yup.DateSchema<Date | null, yup.AnyObject> => {
  let schema = yup.date().nullable().defined(); // Asegura que no sea undefined

  if (validation?.required) {
    schema = schema.required(t("Este campo es obligatorio."));
  }

  if (validation?.minDate) {
    schema = schema.min(
      validation.minDate,
      t("La fecha no puede ser anterior a {{date}}.", {
        date: validation.minDate.toLocaleDateString(),
      })
    );
  }

  if (validation?.maxDate) {
    schema = schema.max(
      validation.maxDate,
      t("La fecha no puede ser posterior a {{date}}.", {
        date: validation.maxDate.toLocaleDateString(),
      })
    );
  }

  return schema;
};
