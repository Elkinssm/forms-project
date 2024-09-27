import React from "react";
import {
  Box,
  VStack,
  Text,
  List,
  ListItem,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Spacer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Section {
  title: string;
  subsections: { name: string; path: string }[];
}

interface SidebarProps {
  sections: Section[];
  progressBySection: number[];
  onSectionClick: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  sections,
  progressBySection,
  onSectionClick,
}) => {
  return (
    <Box w="300px" p="4" bg="gray.100">
      <Accordion allowToggle>
        {sections.map((section, sectionIndex) => (
          <AccordionItem key={sectionIndex}>
            <AccordionButton>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bg="blue.500"
                borderRadius="md"
                p={4}
                height="auto"
                w="full"
                color="white"
              >
                <HStack spacing={4}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="white"
                    borderRadius="full"
                    boxSize="30px"
                  >
                    <Text fontWeight="bold" color="blue.500">
                      {sectionIndex + 1}
                    </Text>
                  </Box>
                  <Text fontWeight="bold" fontSize="lg">
                    {section.title}
                  </Text>
                </HStack>
                <Spacer />
                <CircularProgress
                  value={progressBySection[sectionIndex]}
                  size="50px"
                  color="white"
                  trackColor="blue.300"
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
                    {Math.round(progressBySection[sectionIndex])}%
                  </CircularProgressLabel>
                </CircularProgress>
                <AccordionIcon />
              </Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <List spacing={2} pl={8} w="full">
                {section.subsections.map((subsection, subsectionIndex) => (
                  <ListItem
                    key={subsectionIndex}
                    cursor="pointer"
                    _hover={{ textDecoration: "underline" }}
                    onClick={() =>
                      onSectionClick(
                        sectionIndex * section.subsections.length +
                          subsectionIndex
                      )
                    }
                  >
                    <Link to={subsection.path}>
                      <Text color="gray.700" fontWeight="semibold">
                        {subsection.name}
                      </Text>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default Sidebar;
