import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Tooltip,
  IconButton,
  GridItem,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useFormContext, Controller } from "react-hook-form";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ValidationRules } from "../inputs/fieldsConfig";

interface FileInputProps {
  name: string;
  label: string;
  placeholder?: string;
  helpText?: string;
  colSpan?: number;
  validation?: ValidationRules;
}

const FileInput: React.FC<FileInputProps> = ({
  name,
  label,
  placeholder,
  helpText,
  colSpan = 1,
}) => {
  const { t } = useTranslation();
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const error = errors[name]?.message as string | undefined;

  return (
    <GridItem colSpan={{ base: 1, md: colSpan }}>
      <FormControl isInvalid={!!error} mb={4}>
        <FormLabel htmlFor={name}>
          {t(label)}
          {helpText && (
            <Tooltip
              hasArrow
              placement="top"
              bg="gray.700"
              color="white"
              label={<Box dangerouslySetInnerHTML={{ __html: helpText }} />}
            >
              <IconButton
                aria-label={t("Ayuda")}
                icon={<InfoIcon />}
                size="sm"
                variant="ghost"
                ml={2}
              />
            </Tooltip>
          )}
        </FormLabel>

        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <>
              <input
                type="file"
                ref={inputRef}
                id={name}
                style={{ display: "none" }}
                onChange={(e) => field.onChange(e.target.files?.[0] ?? null)}
              />
              <Button
                onClick={() => inputRef.current?.click()}
                colorScheme="blue"
              >
                {t(placeholder || "Seleccionar archivo")}
              </Button>
              {field.value && (
                <Text mt={2} fontSize="sm" color="gray.500">
                  {field.value.name}
                </Text>
              )}
            </>
          )}
        />

        <FormErrorMessage>{error && t(error)}</FormErrorMessage>
      </FormControl>
    </GridItem>
  );
};

export default FileInput;
