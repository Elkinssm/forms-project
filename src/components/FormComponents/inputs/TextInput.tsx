import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Tooltip,
  IconButton,
  FormErrorMessage,
  GridItem,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ValidationRules } from "../../../utils/validationScheme";

interface TextInputProps {
  name: string;
  label: string;
  placeholder?: string;
  helpText?: string; // Texto de ayuda que se muestra en el tooltip
  colSpan?: number; // Define si ocupa 1 o 2 columnas
  validation?: ValidationRules;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  placeholder,
  helpText,
  colSpan = 1,
}) => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string;

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
        <Input
          id={name}
          {...register(name)}
          placeholder={t(placeholder || "")}
          borderColor="gray.300"
          focusBorderColor="blue.500"
        />
        <FormErrorMessage>{error && t(error)}</FormErrorMessage>
      </FormControl>
    </GridItem>
  );
};

export default TextInput;
