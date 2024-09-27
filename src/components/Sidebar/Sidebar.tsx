// Sidebar.tsx
import React from "react";
import {
  Box,
  VStack,
  Text,
  List,
  ListItem,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Section {
  title: string;
  subsections: { name: string; path: string }[];
}

interface SidebarProps {
  sections: Section[];
  progressBySection: number[]; // Progreso por sección
  onSectionClick: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  sections,
  progressBySection,
  onSectionClick,
}) => {
  return (
    <Box w="250px" p="4" bg="gray.100">
      <VStack spacing={4} align="start">
        {sections.map((section, sectionIndex) => (
          <Box
            key={sectionIndex}
            w="full"
            bg="green.100"
            p={4}
            borderRadius="md"
          >
            <Box display="flex" alignItems="center" mb={2}>
              <CircularProgress
                value={progressBySection[sectionIndex]} // Progreso por sección
                size="40px"
                color="green.400"
                mr={4}
              >
                <CircularProgressLabel>
                  {Math.round(progressBySection[sectionIndex])}%
                </CircularProgressLabel>
              </CircularProgress>
              <Text fontSize="lg" fontWeight="bold">
                {section.title}
              </Text>
            </Box>
            <List spacing={3}>
              {section.subsections.map((subsection, subsectionIndex) => (
                <ListItem
                  key={subsectionIndex}
                  onClick={() =>
                    onSectionClick(
                      sectionIndex * section.subsections.length +
                        subsectionIndex
                    )
                  }
                >
                  <Link to={subsection.path}>{subsection.name}</Link>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
