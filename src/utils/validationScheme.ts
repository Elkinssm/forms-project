import * as yup from "yup";
import { FieldConfig } from "../components/FormComponents/inputs/fieldsConfig";

export interface ValidationRules {
  required?: boolean;
  rule?: string;
  minLength?: number;
  maxLength?: number;
}

export const generateYupSchema = (
  validation: FieldConfig["validation"]
): yup.StringSchema<string, yup.AnyObject> => {
  let schema = yup.string().defined() as yup.StringSchema<
    string,
    yup.AnyObject
  >;

  if (validation?.required) {
    schema = schema.required("Este campo es obligatorio.");
  }

  if (validation?.minLength) {
    schema = schema.min(
      validation.minLength,
      `La longitud mínima es de ${validation.minLength} caracteres.`
    );
  }

  if (validation?.maxLength) {
    schema = schema.max(
      validation.maxLength,
      `La longitud máxima es de ${validation.maxLength} caracteres.`
    );
  }

  if (validation?.rule) {
    schema = schema.matches(new RegExp(validation.rule), "Formato inválido.");
  }

  return schema;
};
