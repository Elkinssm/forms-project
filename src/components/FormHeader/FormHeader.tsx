import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface FormHeaderProps {
  title: string;
  description: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, description }) => {
  return (
    <Box mb={4}>
      <Text fontWeight="bold" fontSize="2xl" mb={2}>
        {title}
      </Text>
      <Text fontSize="md" color="gray.600">
        {description}
      </Text>
    </Box>
  );
};

export default FormHeader;
