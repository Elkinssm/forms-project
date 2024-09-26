import React, { useState, ReactElement, useRef, useEffect } from "react";
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

interface Section {
  title: string;
  children: ReactElement[];
}

interface SidebarProps {
  sections: Section[];
}

interface FormData {
  [key: string]: unknown;
}

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
  const [selectedSteps, setSelectedSteps] = useState<number[]>(
    Array(sections.length).fill(0)
  );
  const [formData, setFormData] = useState<FormData>({});
  const [direction, setDirection] = useState<"next" | "back">("next");
  const totalSteps = sections.reduce(
    (acc, section) => acc + section.children.length,
    0
  );
  const formRef = useRef<HTMLFormElement>(null);

  const currentSectionIndex = selectedSteps.findIndex(
    (step, index) => step < sections[index].children.length
  );
  const currentStepInSection = selectedSteps[currentSectionIndex];

  const handleNext = () => {
    if (
      currentStepInSection <
      sections[currentSectionIndex].children.length - 1
    ) {
      setDirection("next");
      setSelectedSteps((prev) => {
        const updatedSteps = [...prev];
        updatedSteps[currentSectionIndex] += 1;
        return updatedSteps;
      });
    } else if (currentSectionIndex < sections.length - 1) {
      // Move to the next section
      setSelectedSteps((prev) => {
        const updatedSteps = [...prev];
        updatedSteps[currentSectionIndex] += 1; // Set current section step to last
        updatedSteps[currentSectionIndex + 1] = 0; // Reset next section step
        return updatedSteps;
      });
    }
  };

  const handleBack = () => {
    if (currentStepInSection > 0) {
      setDirection("back");
      setSelectedSteps((prev) => {
        const updatedSteps = [...prev];
        updatedSteps[currentSectionIndex] -= 1;
        return updatedSteps;
      });
    } else if (currentSectionIndex > 0) {
      // Move to the previous section
      setSelectedSteps((prev) => {
        const updatedSteps = [...prev];
        updatedSteps[currentSectionIndex - 1] =
          sections[currentSectionIndex - 1].children.length - 1; // Go to last step of previous section
        return updatedSteps;
      });
    }
  };

  const handleDataChange = (data: FormData) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const progressValue =
    ((selectedSteps.reduce((acc, step) => acc + step, 0) +
      currentStepInSection) /
      totalSteps) *
    100;

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentStepInSection, currentSectionIndex]);

  return (
    <Box display="flex" flexDirection={{ base: "column", md: "row" }} h="100vh">
      {/* Sidebar */}
      <Box
        as="aside"
        w={{ base: "100%", md: "420px" }}
        h={{ base: "auto", md: "100vh" }}
        p={4}
        borderRight="1px solid"
        borderColor="neutral.300"
        display="flex"
        flexDirection="column"
      >
        {/* Header for the active section */}
        <VStack align="start" spacing={2} mb={6}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="brand.primary"
            borderRadius="md"
            p={2}
            height={14}
            width="100%"
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
                  {currentStepInSection + 1}
                </Text>
              </Box>
              <Text fontWeight="bold" fontSize="lg" color="white">
                {sections[currentSectionIndex].title}
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
              thickness="5px"
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

        {/* List of sections */}
        <List spacing={2} pl={6} pt={2}>
          {sections.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              <Text fontWeight="bold" mb={2}>
                {section.title}
              </Text>
              {section.children.map((child, index) => (
                <ListItem
                  key={`${sectionIndex}-${index}`}
                  display="flex"
                  alignItems="center"
                  fontWeight={
                    selectedSteps[sectionIndex] === index ? "bold" : "regular"
                  }
                  cursor="pointer"
                  color={
                    selectedSteps[sectionIndex] >= index
                      ? "brand.primary"
                      : "neutral.800"
                  }
                  onClick={() => {
                    const newSteps = [...selectedSteps];
                    newSteps[sectionIndex] = index;
                    setSelectedSteps(newSteps);
                  }}
                >
                  <Icon
                    as={
                      selectedSteps[sectionIndex] >= index
                        ? CheckIcon
                        : CircleIcon
                    }
                    boxSize={4}
                    color={
                      selectedSteps[sectionIndex] >= index
                        ? "brand.primary"
                        : "neutral.500"
                    }
                    mr={2}
                  />
                  {React.isValidElement(child)
                    ? (child as ReactElement<{ title: string }>).props.title
                    : null}
                </ListItem>
              ))}
            </React.Fragment>
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
            title="Business Information"
            description="Let’s start with your company’s basic information."
          />
        </Box>
        <Box
          flex="1"
          p={6}
          overflowY="auto"
          maxH="calc(100vh - 120px)"
          position="relative"
          zIndex={0}
        >
          <AnimatePresence initial={false} mode="wait">
            {sections.map((section, sectionIndex) =>
              section.children.map((child, index) =>
                selectedSteps[sectionIndex] === index ? (
                  <motion.div
                    key={`${sectionIndex}-${index}`}
                    initial={
                      direction === "next"
                        ? { opacity: 0, y: 50 }
                        : { opacity: 0, y: -50 }
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
              )
            )}
          </AnimatePresence>
        </Box>
        <Box flex="0" p={4} bg="white" boxShadow="md">
          <FormNavigation
            onBack={handleBack}
            onNext={handleNext}
            formRef={formRef}
            showBackButton={currentStepInSection > 0}
            isFirstPage={currentStepInSection === 0}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
