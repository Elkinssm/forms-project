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
  HStack,
  Spacer,
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
      {" "}
      {/* Ajusta el ancho fijo para el sidebar */}
      <VStack spacing={6} align="start">
        {" "}
        {/* Espaciado entre secciones */}
        {sections.map((section, sectionIndex) => (
          <VStack
            key={sectionIndex}
            align="start"
            spacing={4} // Ajuste de espacio entre título y subsecciones
            width="full"
          >
            {/* Contenedor del título y progreso de la sección */}
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
            </Box>

            {/* Lista de subsecciones */}
            <List spacing={2} pl={8} w="full">
              {" "}
              {/* Ajusta el `pl` (padding left) para la indentación */}
              {section.subsections.map((subsection, subsectionIndex) => (
                <ListItem
                  key={subsectionIndex}
                  cursor="pointer" // Cambia el cursor para indicar que es clicable
                  _hover={{ textDecoration: "underline" }} // Efecto hover para indicar interacción
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
          </VStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
