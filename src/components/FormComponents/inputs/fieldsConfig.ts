export interface FieldConfig {
  name: string;
  label: string;
  placeholder?: string;
  helpText?: string;
  colSpan?: number;
  validation: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    rule?: string;
  };
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
      rule: "^[a-zA-Z ]+$", 
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
];
