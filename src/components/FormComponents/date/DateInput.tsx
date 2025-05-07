import React from "react";
import {
  FormControl,
  FormLabel,
  Tooltip,
  IconButton,
  FormErrorMessage,
  GridItem,
  Input,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateInput.css"; // Aquí importas tu hoja de estilos si quieres

interface DateInputProps {
  name: string;
  label: string;
  placeholder?: string;
  helpText?: string;
  colSpan?: number;
  validation?: {
    required?: boolean;
    minDate?: Date;
    maxDate?: Date;
  };
}

const DateInput: React.FC<DateInputProps> = ({
  name,
  label,
  placeholder,
  helpText,
  colSpan = 1,
}) => {
  const { t } = useTranslation();
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  // Obtiene el valor actual del campo
  const dateValue = watch(name) as Date | null;
  const error = errors[name]?.message as string;

  const handleDateChange = (date: Date | null) => {
    setValue(name, date);
  };

  return (
    <GridItem colSpan={{ base: 1, md: colSpan }}>
      <FormControl isInvalid={!!error} mb={4}>
        <FormLabel htmlFor={name}>
          {t(label)}
          {helpText && (
            <Tooltip label={helpText} placement="top" hasArrow>
              <IconButton
                aria-label={t("help")}
                icon={<InfoIcon />}
                size="sm"
                variant="ghost"
                ml={2}
              />
            </Tooltip>
          )}
        </FormLabel>

        {/* Este input es necesario para que React Hook Form maneje el campo */}
        <Input type="hidden" {...register(name)} />

        <DatePicker
          id={name}
          placeholderText={placeholder ? t(placeholder) : ""}
          selected={dateValue || null}
          onChange={handleDateChange}
          className="chakra-input date-picker" // Clase extra
          popperClassName="chakra-datepicker-popper"
        />

        <FormErrorMessage>{error && t(error)}</FormErrorMessage>
      </FormControl>
    </GridItem>
  );
};

export default DateInput;
