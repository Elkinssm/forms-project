export type FieldType = "text" | "date" | "file";

export interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  rule?: string;
  minDate?: Date;
  maxDate?: Date;
  maxSize?: number;
  allowedTypes?: string[];
}

export interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  helpText?: string;
  colSpan?: number;
  validation: ValidationRules;
}

export const fields: FieldConfig[] = [
  {
    name: "name_fp",
    label: "Nombre",
    type: "text",
    placeholder: "Enter your name",
    helpText: "This is the name of your business.",
    colSpan: 1,
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50,
      rule: "^[a-zA-Z ]+$",
    },
  },
  {
    name: "business_address",
    label: "Business Address",
    type: "text",
    placeholder: "Enter your business address",
    helpText: "Provide the full address of your business.",
    colSpan: 2,
    validation: {
      required: true,
    },
  },
  {
    name: "start_date",
    label: "Start Date",
    type: "date",
    placeholder: "Select a start date",
    helpText: "Choose the start date for your business.",
    colSpan: 1,
    validation: {
      required: true,
      minDate: new Date("2023-01-01"),
      maxDate: new Date("2025-12-31"),
    },
  },
  {
    name: "file",
    label: "upload_file_label", // Clave de traducción
    type: "file",
    placeholder: "upload_file_placeholder", // Clave de traducción
    helpText: "upload_file_helpText", // Clave de traducción
    colSpan: 2,
    validation: {
      required: true,
      maxSize: 2 * 1024 * 1024, // 2MB
      allowedTypes: ["application/pdf"],
    },
  },
];
