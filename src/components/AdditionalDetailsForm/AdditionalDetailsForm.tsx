import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface AdditionalDetailsFormProps {
  title: string;
}

const AdditionalDetailsForm: React.FC<AdditionalDetailsFormProps> = ({
  title,
}) => (
  <Box>
    <Text fontWeight="bold" fontSize="lg" mb={4}>
      {title}
    </Text>
    <Text mb={2}>Corporate Address</Text>
    {/* Add your form fields here */}
  </Box>
);

export default AdditionalDetailsForm;
