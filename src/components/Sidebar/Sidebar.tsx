import React, { useState, ReactElement, useEffect } from "react";
import {
  Text,
  List,
  ListItem,
  Icon,
  Box,
  CircularProgress,
  CircularProgressLabel,
  HStack,
} from "@chakra-ui/react";
import { CheckIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import FormHeader from "../FormHeader/FormHeader";

// Definición de los tipos de las propiedades del Sidebar
interface SidebarProps {
  children: ReactElement[];
}

interface FormData {
  [key: string]: unknown;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({});
  const [direction, setDirection] = useState<"next" | "back">("next");
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const totalSteps = React.Children.count(children);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  const handleNext = () => {
    if (selectedPage < totalSteps - 1) {
      setDirection("next");
      setSelectedPage(selectedPage + 1);
    }
  };

  const handleBack = () => {
    if (selectedPage > 0) {
      setDirection("back");
      setSelectedPage(selectedPage - 1);
    }
  };

  const handleDataChange = (data: FormData) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const progressValue = ((selectedPage + 1) / totalSteps) * 100;

  return (
    <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
      {/* Sidebar */}
      <Box
        as="aside"
        bg="blue.50"
        w={{ base: "100%", md: "250px" }}
        h={{ base: "auto", md: "100vh" }}
        p={4}
        borderRight={{ md: "1px" }}
        borderBottom={{ base: "1px", md: "none" }}
        borderColor="gray.200"
        display="flex"
        flexDirection="column"
      >
        <HStack align="start" spacing={4} mb={6}>
          <Text fontWeight="bold" fontSize="lg" color="blue.500">
            Business Information
          </Text>
          <CircularProgress
            value={progressValue}
            size="50px"
            color="blue.500"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgressLabel fontSize="12px">
              {Math.round(progressValue)}%
            </CircularProgressLabel>
          </CircularProgress>
        </HStack>
        <List spacing={2} pl={6} pt={2}>
          {React.Children.map(children, (child, index) => (
            <ListItem
              key={index}
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
              {React.isValidElement(child)
                ? (child as ReactElement<{ title: string }>).props.title
                : null}
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Main Content */}
      <Box display="flex" flexDirection="column" w={"100%"} position="relative">
        <Box
          flex="0"
          p={6}
          bg="#F9FCFF"
          borderBottom="1px solid"
          borderColor="gray.200"
          zIndex={1}
          position="relative"
        >
          <FormHeader
            title="Business information"
            description="Let’s start with your company’s basic information. [We could add here why the company requests this information]"
          />
        </Box>
        <Box flex="1" p={6} overflow="hidden" position="relative" zIndex={0}>
          <AnimatePresence initial={false} mode="wait">
            {React.Children.map(children, (child, index) =>
              index === selectedPage ? (
                <motion.div
                  key={index}
                  initial={
                    isFirstRender
                      ? {}
                      : { opacity: 0, y: direction === "next" ? 50 : -50 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: direction === "next" ? -50 : 50 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {React.cloneElement(child as React.ReactElement, {
                    onNext: handleNext,
                    onBack: handleBack,
                    onDataChange: handleDataChange,
                    formData: formData,
                  })}
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
