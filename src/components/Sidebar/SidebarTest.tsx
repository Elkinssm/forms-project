import React, { ReactNode, RefObject, useState } from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  VStack,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Spacer,
  Text,
  Icon,
  List,
  ListItem,
  AccordionIcon,
} from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";
import { CheckIcon } from "@chakra-ui/icons";
import CircleIcon from "/src/utils/CircleIcon";

interface SidebarTestProps {
  children: ReactNode;
  formRef: RefObject<HTMLFormElement>;
}

const SidebarTest: React.FC<SidebarTestProps> = ({ children, formRef }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();

  const handleToggle = (section: string) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  const isActiveForm = (path: string) => location.pathname.includes(path);

  return (
    <Box display="flex" h="100vh">
      <Box w="300px" p="4" bg="gray.100">
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButtonWithProgress
                section="business"
                sectionNumber={1}
                totalForms={2}
                isActive={activeSection === "business"}
                onClick={() => handleToggle("business")}
              >
                Business Information
              </AccordionButtonWithProgress>
            </h2>
            <AccordionPanel pb={4}>
              <List spacing={2} pl={6} pt={2}>
                <ListItem
                  display="flex"
                  alignItems="center"
                  fontWeight={
                    isActiveForm("/business/form1") ? "bold" : "regular"
                  }
                  cursor="pointer"
                  color={
                    isActiveForm("/business/form1")
                      ? "brand.primary"
                      : "neutral.800"
                  }
                >
                  <Icon
                    as={
                      isActiveForm("/business/form1") ? CheckIcon : CircleIcon
                    }
                    boxSize={4}
                    color={
                      isActiveForm("/business/form1")
                        ? "brand.primary"
                        : "neutral.500"
                    }
                    mr={2}
                  />
                  <Link to="/business/form1">Company Information</Link>
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  fontWeight={
                    isActiveForm("/business/form2") ? "bold" : "regular"
                  }
                  cursor="pointer"
                  color={
                    isActiveForm("/business/form2")
                      ? "brand.primary"
                      : "neutral.800"
                  }
                >
                  <Icon
                    as={
                      isActiveForm("/business/form2") ? CheckIcon : CircleIcon
                    }
                    boxSize={4}
                    color={
                      isActiveForm("/business/form2")
                        ? "brand.primary"
                        : "neutral.500"
                    }
                    mr={2}
                  />
                  <Link to="/business/form2">Additional Details</Link>
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButtonWithProgress
                section="contact"
                sectionNumber={2}
                totalForms={2}
                isActive={activeSection === "contact"}
                onClick={() => handleToggle("contact")}
              >
                Contact Information
              </AccordionButtonWithProgress>
            </h2>
            <AccordionPanel pb={4}>
              <List spacing={2} pl={6} pt={2}>
                <ListItem
                  display="flex"
                  alignItems="center"
                  fontWeight={
                    isActiveForm("/contact/form1") ? "bold" : "regular"
                  }
                  cursor="pointer"
                  color={
                    isActiveForm("/contact/form1")
                      ? "brand.primary"
                      : "neutral.800"
                  }
                >
                  <Icon
                    as={isActiveForm("/contact/form1") ? CheckIcon : CircleIcon}
                    boxSize={4}
                    color={
                      isActiveForm("/contact/form1")
                        ? "brand.primary"
                        : "neutral.500"
                    }
                    mr={2}
                  />
                  <Link to="/contact/form1">Contact Information</Link>
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  fontWeight={
                    isActiveForm("/contact/form2") ? "bold" : "regular"
                  }
                  cursor="pointer"
                  color={
                    isActiveForm("/contact/form2")
                      ? "brand.primary"
                      : "neutral.800"
                  }
                >
                  <Icon
                    as={isActiveForm("/contact/form2") ? CheckIcon : CircleIcon}
                    boxSize={4}
                    color={
                      isActiveForm("/contact/form2")
                        ? "brand.primary"
                        : "neutral.500"
                    }
                    mr={2}
                  />
                  <Link to="/contact/form2">Corporate Address</Link>
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      <Box flex="1" p="4">
        <Box as="form" ref={formRef}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

interface AccordionButtonWithProgressProps {
  section: string;
  sectionNumber: number;
  totalForms: number;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const AccordionButtonWithProgress: React.FC<
  AccordionButtonWithProgressProps
> = ({ section, sectionNumber, totalForms, children, isActive, onClick }) => {
  const location = useLocation();
  const currentForm = location.pathname.includes(section)
    ? parseInt((location.pathname.split("/").pop() ?? "").replace("form", ""))
    : 0;
  const progressValue = (currentForm / totalForms) * 100;

  return (
    <AccordionButton onClick={onClick}>
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
                {sectionNumber}
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="lg" color="white">
              {children}
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
      <AccordionIcon />
    </AccordionButton>
  );
};

export default SidebarTest;
