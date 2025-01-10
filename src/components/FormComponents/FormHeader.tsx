import { Box, VStack, Heading, Text } from "@chakra-ui/react";

interface FormHeaderProps {
  title: string;
  description: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, description }) => {
  return (
    <Box backgroundColor="brand.ligthBlue" maxWidth={"500px"}>
      <VStack spacing={4} align="center">
        <Heading as="h1" size="md" mb={2} textAlign="center">
          {title}
        </Heading>
        <Text size={"sm"} textAlign="center">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

export default FormHeader;
