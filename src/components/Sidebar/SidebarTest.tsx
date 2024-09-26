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
  const location = useLocation();

  // Estado para manejar el progreso de los formularios de las secciones existentes
  const [businessProgress, setBusinessProgress] = useState(0);
  const [contactProgress, setContactProgress] = useState(0);

  // Aquí puedes añadir nuevos estados para cada nueva sección
  const [otherSectionProgress, setOtherSectionProgress] = useState(0); // NUEVA SECCIÓN

  const updateProgress = (path: string) => {
    // Lógica para actualizar el progreso según la ruta actual
    if (path.includes("/business")) {
      const formNumber = parseInt(
        path.split("/").pop()?.replace("form", "") || "0"
      );
      setBusinessProgress((formNumber / 2) * 100); // Actualiza el progreso de la sección Business (2 formularios)
    } else if (path.includes("/contact")) {
      const formNumber = parseInt(
        path.split("/").pop()?.replace("form", "") || "0"
      );
      setContactProgress((formNumber / 3) * 100); // Actualiza el progreso de la sección Contact (3 formularios)
    }
    // Agregar la lógica de progreso para la nueva sección
    else if (path.includes("/othersection")) {
      const formNumber = parseInt(
        path.split("/").pop()?.replace("form", "") || "0"
      );
      setOtherSectionProgress((formNumber / 2) * 100); // Actualiza el progreso de la nueva sección
    }
  };

  // Efecto que se dispara cuando cambia la ruta
  React.useEffect(() => {
    updateProgress(location.pathname);
  }, [location]);

  return (
    <Box display="flex" h="100vh">
      {/* Sidebar */}
      <Box w="300px" p="4" bg="gray.100">
        <Accordion allowToggle>
          {/* Sección Business */}
          <AccordionItem>
            <h2>
              <AccordionButtonWithProgress
                section="business"
                sectionNumber={1}
                totalForms={2}
                progressValue={businessProgress}
              >
                Business Information
              </AccordionButtonWithProgress>
            </h2>
            <AccordionPanel pb={4}>
              <List spacing={2} pl={6} pt={2}>
                <ListItem>
                  <Link to="/business/form1">Company Information</Link>
                </ListItem>
                <ListItem>
                  <Link to="/business/form2">Additional Details</Link>
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>

          {/* Sección Contact */}
          <AccordionItem>
            <h2>
              <AccordionButtonWithProgress
                section="contact"
                sectionNumber={2}
                totalForms={3}
                progressValue={contactProgress}
              >
                Contact Information
              </AccordionButtonWithProgress>
            </h2>
            <AccordionPanel pb={4}>
              <List spacing={2} pl={6} pt={2}>
                <ListItem>
                  <Link to="/contact/form1">Contact Information</Link>
                </ListItem>
                <ListItem>
                  <Link to="/contact/form2">Corporate Address</Link>
                </ListItem>
                <ListItem>
                  <Link to="/contact/form3">Owner Information</Link>
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>

          {/* Nueva sección - ejemplo */}
          <AccordionItem>
            <h2>
              <AccordionButtonWithProgress
                section="othersection"
                sectionNumber={3} // Número de la sección
                totalForms={2} // Número total de formularios en esta sección
                progressValue={otherSectionProgress}
              >
                Other Section
              </AccordionButtonWithProgress>
            </h2>
            <AccordionPanel pb={4}>
              <List spacing={2} pl={6} pt={2}>
                <ListItem>
                  <Link to="/othersection/form1">Other Form 1</Link>
                </ListItem>
                <ListItem>
                  <Link to="/othersection/form2">Other Form 2</Link>
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      {/* Formulario que cambia según la sección */}
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
  progressValue: number;
  children: React.ReactNode;
}

// Componente reutilizable para el botón de acordeón con progreso
const AccordionButtonWithProgress: React.FC<
  AccordionButtonWithProgressProps
> = ({ section, sectionNumber, totalForms, progressValue, children }) => {
  return (
    <AccordionButton>
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
