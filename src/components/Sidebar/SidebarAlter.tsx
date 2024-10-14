// Sidebar.tsx
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
  Image,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import FormHeader from "../FormComponents/FormHeader";
import CircleIcon from "../../utils/CircleIcon";
import FormNavigation from "../FormComponents/FormNavigation";
import logo from "../../assets/logo-payment.jpg";
import { ZodError } from "zod";

interface SidebarProps {
  children: ReactElement[];
}

interface FormData {
  [key: string]: unknown;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({});
  const [formDataAll, setFormDataAll] = useState<FormData>({});
  const [direction, setDirection] = useState<"next" | "back">("next");
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const totalSteps = React.Children.count(children);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);
  const handleNext = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const handleFormValidationSuccess = () => {
    if (selectedPage < totalSteps - 1) {
      setDirection("next");
      setSelectedPage((prevPage) => prevPage + 1);
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
    setFormDataAll((prevData) => ({ ...prevData, ...data }));
  };

  // const handlePageChange = async (nextPage: number) => {
  //   debugger;
  //   if (formRef.current) {
  //     try {
  //       // Obtener el formulario actual
  //       const currentChild = children[selectedPage];

  //       // Aquí extraemos las props, incluyendo validationSchema, title, description, etc.
  //       const validationSchema = currentChild?.props?.validationSchema;

  //       if (validationSchema) {
  //         const formData = new FormData(formRef.current);
  //         const formValues = Object.fromEntries(formData.entries());

  //         // Validar usando Zod con el esquema proporcionado por el formulario actual
  //         await validationSchema.parseAsync(formValues);

  //         // Si la validación es exitosa, cambiar de página
  //         setSelectedPage(nextPage);
  //       } else {
  //         // Si no hay esquema de validación, permitir el cambio
  //         setSelectedPage(nextPage);
  //       }
  //     } catch (error) {
  //       if (error instanceof ZodError) {
  //         // Manejar los errores de validación
  //         console.error("Errores de validación:", error.errors);
  //         setIsModalOpen(true);
  //       }
  //     }
  //   }
  // };

  const handlePageChange = async (nextPage: number) => {
    // si se esta devolviendo
    if (nextPage < selectedPage) {
      setSelectedPage(nextPage);
      return;
    }
    // se valida que solo avance al siguiente formulario
    if (nextPage != selectedPage + 1) {
      nextPage = selectedPage + 1;
    }
    // Si el usuario está intentando avanzar
    if (nextPage > selectedPage) {
      // Validar el formulario actual antes de permitir avanzar
      if (formRef.current) {
        try {
          // Obtener el formulario actual
          const currentChild = children[selectedPage];

          // Acceder a la prop `validationSchema` del formulario actual
          const validationSchema = currentChild?.props?.validationSchema;

          if (validationSchema) {
            const formData = new FormData(formRef.current);
            const formValues = Object.fromEntries(formData.entries());

            // Validar usando Zod con el esquema proporcionado por el formulario actual
            await validationSchema.parseAsync(formValues);

            handleDataChange(formValues);

            // Si la validación es exitosa, cambiar de página
            setSelectedPage(nextPage);
          } else {
            // Si no hay esquema de validación, permitir el cambio
            setSelectedPage(nextPage);
          }
        } catch (error) {
          if (error instanceof ZodError) {
            // Manejar los errores de validación y evitar el cambio de página
            console.error("Errores de validación:", error.errors);
            setIsModalOpen(true);
          }
        }
      }
    } else {
      // Si el usuario está retrocediendo, permitir el cambio sin validar
      setSelectedPage(nextPage);
    }
  };

  const progressValue = ((selectedPage + 1) / totalSteps) * 100;

  // Obtener el título y la descripción del formulario seleccionado
  const currentChild = children[selectedPage];

  // Verificar si el currentChild tiene title y description
  const title = currentChild?.props?.title || "Default Title";
  const description = currentChild?.props?.description || "Default Description";

  // Añadir logs para depuración
  // console.log("Current Child:", currentChild);
  // console.log("Title:", title);
  // console.log("Description:", description);

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
        <Image src={logo} alt="Logo" pb={2} width="auto" height="45px" />
        <VStack align="start" spacing={4} mb={6} flexDirection={"row"}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="brand.primary"
            borderRadius="md"
            p={4}
            height={14}
            w={300}
          >
            <HStack spacing={4}>
              <Text fontWeight="bold" fontSize="lg" color="white">
                Application
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
        <List spacing={3} pl={4} pt={2}>
          {React.Children.map(children, (child, index) => (
            <ListItem
              key={index}
              display="flex"
              alignItems="center"
              fontWeight={index === selectedPage ? "bold" : "regular"}
              cursor="pointer"
              color={index <= selectedPage ? "brand.primary" : "neutral.800"}
              onClick={() => handlePageChange(index)}
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
          {/* Usar título y descripción del formulario actual */}
          <FormHeader title={title} description={description} />
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
                    onNext: handleFormValidationSuccess, // Llamado si el formulario es válido
                    onBack: handleBack,
                    onDataChange: handleDataChange,
                    formData: formData,
                    formRef: formRef,
                    formDataAll: formData,
                    // No sobreescribir title o description aquí
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
      {/* Modal de validación */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Incomplete Form</ModalHeader>
          <ModalBody>
            Please fill out all required fields before proceeding to the next
            step.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={() => setIsModalOpen(false)}>
              Got it
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Sidebar;
