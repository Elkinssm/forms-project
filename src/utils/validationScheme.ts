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

interface FileValidation extends ValidationRules {
  maxSize?: number; // bytes
  allowedTypes?: string[];
}

export const generateYupSchema = (
  validation: FieldConfig["validation"],
  t: TFunction
):
  | yup.StringSchema<string, yup.AnyObject>
  | yup.DateSchema<Date | null, yup.AnyObject> => {
  if (validation?.minDate || validation?.maxDate) {
    return getDateValidationSchema(validation, t);
  }

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
  let schema = yup.date().nullable().defined();

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

export const generateFileYupSchema = (
  validation: FileValidation,
  t: TFunction
): yup.MixedSchema<File | null> => {
  let schema = yup.mixed<File>().nullable().defined();

  if (validation.required) {
    schema = schema
      .required(t("Este campo es obligatorio."))
      .typeError(t("Este campo es obligatorio."));
  }

  if ("maxSize" in validation && typeof validation.maxSize === "number") {
    const maxSize = validation.maxSize;
    schema = schema.test(
      "file-size",
      t("El archivo supera el tamaño máximo permitido."),
      (file) => !file || file.size <= maxSize
    );
  }

  if ("allowedTypes" in validation && Array.isArray(validation.allowedTypes)) {
    const allowedTypes = validation.allowedTypes;
    schema = schema.test(
      "file-type",
      t("Tipo de archivo no permitido."),
      (file) => !file || allowedTypes.includes(file.type)
    );
  }

  return schema;
};
