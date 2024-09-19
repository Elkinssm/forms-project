import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface CorporateAddressFormProps {
  title: string;
}

const CorporateAddressForm: React.FC<CorporateAddressFormProps> = ({ title }) => (
  <Box>
    <Text fontWeight="bold" fontSize="lg" mb={4}>
      {title}
    </Text>
    <Text mb={2}>Corporate Address</Text>
    {/* Add your form fields here */}
  </Box>
);

export default CorporateAddressForm;
