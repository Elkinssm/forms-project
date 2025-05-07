export interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  rule?: string;
  minDate?: Date;
  maxDate?: Date;
}

export interface FieldConfig {
  name: string;
  label: string;
  placeholder?: string;
  helpText?: string;
  colSpan?: number; 
  validation: ValidationRules;
}

export const fields: FieldConfig[] = [
  {
    name: "name_fp",
    label: "Nombre",
    placeholder: "Enter your name",
    helpText: "This is the name of your business.",
    colSpan: 1,
    validation: {
      required: true,
      minLength: 3,
      maxLength: 50,
      rule: "^[a-zA-Z ]+$", // Solo letras y espacios
    },
  },
  {
    name: "business_address",
    label: "Business Address",
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
    placeholder: "Select a start date",
    helpText: "Choose the start date for your business.",
    colSpan: 1,
    validation: {
      required: true,
      minDate: new Date("2023-01-01"),
      maxDate: new Date("2025-12-31"),
    },
  },
];
