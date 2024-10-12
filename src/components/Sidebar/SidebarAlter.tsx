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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import FormHeader from "../FormComponents/FormHeader";
import CircleIcon from "../../utils/CircleIcon";
import FormNavigation from "../FormComponents/FormNavigation";
import logo from "../../assets/logo-payment.jpg";

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
    setFormDataAll((prevData) => ({ ...prevData, ...data }));
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
                    onNext: handleNext,
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
    </Box>
  );
};

export default Sidebar;
