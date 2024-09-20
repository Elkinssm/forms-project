import { Box, VStack, Heading, Text } from "@chakra-ui/react";

interface FormHeaderProps {
  title: string;
  description: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, description }) => {
  return (
    <Box backgroundColor="F9FCFF" px="224px" py="32px">
      <VStack spacing={4} align="center">
        <Heading as="h1" size="lg" mb={2} textAlign="center">
          {title}
        </Heading>
        <Text textAlign="center">{description}</Text>
      </VStack>
    </Box>
  );
};

export default FormHeader;