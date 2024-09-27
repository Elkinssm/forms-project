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
  Icon,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import CircleIcon from "../../utils/CircleIcon";

interface Section {
  title: string;
  subsections: { name: string; path: string }[];
}

interface SidebarProps {
  sections: Section[];
  progress: number;
  onSectionClick: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  sections,
  progress,
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
                value={progress}
                size="40px"
                color="green.400"
                mr={4}
              >
                <CircularProgressLabel>
                  {Math.round(progress)}%
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
