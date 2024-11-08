import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

interface SendConfirmProps {
  title: string;
  description: string;
  onNext?: () => void;
  onBack?: () => void;
}

const SendConfirm: React.FC<SendConfirmProps> = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
     // height="100vh"
     // backgroundColor="gray.50"
    >
      <VStack spacing={4} align="center">
        {/* <Spinner size="xl" color="blue.500" /> */}
        <Text fontSize="2xl" fontWeight="bold" color="gray.700">
          Your request is being processed
        </Text>
        <Text fontSize="md" color="gray.500">
          Please wait while we process your request.
        </Text>
        {/* <Text fontSize="2xl" fontWeight="bold" color="gray.700">
          {title}
        </Text>
        <Text fontSize="md" color="gray.500">
          {description}
        </Text> */}
      </VStack>
    </Box>
  );
}


export default SendConfirm;