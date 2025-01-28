import React from "react";
import { Text } from "@chakra-ui/react";

interface ErrorMessageProps {
  error?: string; // Prop para recibir el mensaje de error
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null; // No renderizar nada si no hay error

  return (
    <Text color="semantic.error.DEFAULT" fontSize="xs">
      {error}
    </Text>
  );
};

export default ErrorMessage;
