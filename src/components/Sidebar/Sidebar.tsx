import React, { useState, ReactElement, useEffect, useRef } from "react";
import {
  Text,
  List,
  ListItem,
  Icon,
  Box,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import FormHeader from "../FormComponents/FormHeader";
import CircleIcon from "../../utils/CircleIcon";
import FormNavigation from "../FormComponents/FormNavigation";

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
  const formRef = useRef<HTMLFormElement>(null);

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
    <Box display="flex" flexDirection={{ base: "column", md: "row" }} h="100vh">
      {/* Sidebar */}
      <Box
        as="aside"
        w={{ base: "100%", md: "420px" }}
        h={{ base: "auto", md: "100vh" }} // Asegurar que el sidebar tenga la altura completa de la pantalla
        p={4}
        borderRight="1px solid"
        borderColor="neutral.300"
        display="flex"
        flexDirection="column"
      >
        <VStack align="start" spacing={2} mb={6} flexDirection={"row"}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="brand.primary"
            borderRadius="md"
            p={2}
            height={14}
            w={300}
          >
            <HStack spacing={2}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="white"
                borderRadius="full"
                boxSize="30px"
              >
                <Text fontWeight="bold" color="blue.500">
                  1
                </Text>
              </Box>
              <Text fontWeight="bold" fontSize="lg" color="white">
                Business Information
              </Text>
            </HStack>
            <Spacer />
            <CircularProgress
              value={progressValue}
              size="50px"
              color="white"
              trackColor="neutral.500"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <CircularProgressLabel
                fontSize="12px"
                color="white"
                fontWeight="bold"
              >
                {Math.round(progressValue)}%
              </CircularProgressLabel>
            </CircularProgress>
          </Box>
        </VStack>
        <List spacing={2} pl={6} pt={2}>
          {React.Children.map(children, (child, index) => (
            <ListItem
              key={index}
              display="flex"
              alignItems="center"
              fontWeight={index === selectedPage ? "bold" : "regular"}
              cursor="pointer"
              color={index <= selectedPage ? "brand.primary" : "neutral.800"}
              onClick={() => setSelectedPage(index)}
            >
              <Icon
                as={index <= selectedPage ? CheckIcon : CircleIcon}
                boxSize={4}
                color={index <= selectedPage ? "brand.primary" : "neutral.500"}
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
      <Box display="flex" flexDirection="column" w="100%" h="100%">
        <Box
          flex="0"
          p={6}
          bg="#F9FCFF"
          display="flex"
          justifyContent="center"
          borderBottom="1px solid"
          borderColor="gray.200"
          zIndex={1}
        >
          <FormHeader
            title="Business information"
            description="Let’s start with your company’s basic information. [We could add here why the company requests this information]"
          />
        </Box>
        <Box
          // maxWidth={"200px"}
          // bg={{ base: "red", md: "green", lg: "salmon" }}
          flex="1"
          p={6}
          overflowY="auto"
          maxH="calc(100vh - 120px)"
          position="relative"
          zIndex={0}
          // maxWidth={{ base: "600px" , md: "800px", lg: "1300px" }}
        >
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
                    formRef: formRef,
                  })}
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </Box>
        <Box flex="0" p={4} bg="white" boxShadow="md">
          <FormNavigation
            onBack={handleBack}
            onNext={handleNext}
            formRef={formRef}
            showBackButton={selectedPage > 0}
            isFirstPage={selectedPage === 0}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
