import React, { useState } from "react";
import {
  VStack,
  Text,
  List,
  ListItem,
  Icon,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Button,
  HStack,
} from "@chakra-ui/react";
import { CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const totalSteps = React.Children.count(children);

  const handleNext = () => {
    if (selectedPage < totalSteps - 1) {
      setSelectedPage(selectedPage + 1);
    }
  };

  const handleBack = () => {
    if (selectedPage > 0) {
      setSelectedPage(selectedPage - 1);
    }
  };

  const progressValue = ((selectedPage + 1) / totalSteps) * 100;

  return (
    <Box display="flex">
      {/* Sidebar */}
      <Box
        as="aside"
        bg="blue.50"
        w="250px"
        h="100vh"
        p={4}
        borderRight="1px"
        borderColor="gray.200"
      >
        <VStack align="start" spacing={4}>
          <HStack>
            <Text fontWeight="bold" fontSize="lg" color="blue.500">
              Business Information
            </Text>
            <CircularProgress
              value={progressValue}
              size="40px"
              color="blue.500"
            >
              <CircularProgressLabel fontSize="12px">
                {Math.round(progressValue)}%
              </CircularProgressLabel>
            </CircularProgress>
          </HStack>
          <List spacing={2} pl={6} pt={2}>
            {React.Children.map(children, (child, index) => (
              <ListItem
                display="flex"
                alignItems="center"
                cursor="pointer"
                onClick={() => setSelectedPage(index)}
              >
                <Icon
                  as={index <= selectedPage ? CheckIcon : SmallCloseIcon}
                  boxSize={4}
                  color={index <= selectedPage ? "blue.500" : "gray.400"}
                  mr={2}
                />
                {React.isValidElement(child) ? child.props.title : null}
              </ListItem>
            ))}
          </List>
        </VStack>
      </Box>

      {/* Main Content */}
      <Box flex="1" p={6}>
        {React.Children.toArray(children)[selectedPage]}
        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            onClick={handleBack}
            colorScheme="gray"
            isDisabled={selectedPage === 0}
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            colorScheme="blue"
            isDisabled={selectedPage === totalSteps - 1}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
