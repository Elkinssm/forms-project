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
  const [isSummary, setIsSummary] = useState<boolean>(false);

  const totalSteps = React.Children.count(children);
  const formRef = useRef<HTMLFormElement>(null);

  // Páginas con errores.
  const [validationErrors, setValidationErrors] = useState<number[]>([]);

  // Páginas que el usuario visitó.
  const [visitedPages, setVisitedPages] = useState<Set<number>>(new Set([0]));

  // Páginas que realmente se validaron exitosamente.
  const [validatedPages, setValidatedPages] = useState<Set<number>>(new Set());

  useEffect(() => {
    setIsFirstRender(false);
    // No valide el primer formulario de inmediato
  }, []);

  const validateForm = async (index: number) => {
    const currentChild = children[index];
    const validationSchema = currentChild?.props?.validationSchema;
    if (!validationSchema || !formRef.current) return;

    const currentFormData = new FormData(formRef.current);
    const formValues: { [key: string]: string | FileList } = {};

    for (const [key, value] of currentFormData.entries()) {
      formValues[key] = value instanceof FileList ? value : String(value);
    }

    const owners = Object.keys(formValues)
      .filter((k) => k.startsWith("owners."))
      .reduce((acc: Array<Record<string, string>>, key) => {
        const [, ownerIndex, field] = key.split(".");
        if (!acc[Number(ownerIndex)]) acc[Number(ownerIndex)] = {};
        acc[Number(ownerIndex)][field] = String(formValues[key]);
        return acc;
      }, []);

    const otherFields = Object.keys(formValues)
      .filter((k) => !k.startsWith("owners."))
      .reduce((acc, key) => {
        acc[key] =
          formValues[key] instanceof FileList
            ? formValues[key][0]
            : formValues[key];
        return acc;
      }, {} as Record<string, string | File>);

    const transformedValues = {
      ...otherFields,
      owners,
    };

    try {
      await validationSchema.parseAsync(transformedValues);
      // Quitar la página de errores y añadirla a validadas
      setValidationErrors((prev) => prev.filter((e) => e !== index));
      setValidatedPages((prev) => new Set([...prev, index]));
    } catch (error) {
      if (error instanceof ZodError) {
        // Añadir a errores y quitar de validadas
        setValidationErrors((prev) =>
          prev.includes(index) ? prev : [...prev, index]
        );
        setValidatedPages((prev) => {
          const next = new Set(prev);
          next.delete(index);
          return next;
        });
      }
    }
  };

  const handleNext = () => {
    // Forzar submit
    formRef.current?.requestSubmit();
  };

  const handleFormValidationSuccess = async () => {
    if (selectedPage < totalSteps - 1) {
      setDirection("next");
      // Validar la página actual antes de avanzar
      await validateForm(selectedPage);
      const nextPage = selectedPage + 1;
      setSelectedPage(nextPage);
      setVisitedPages((prev) => new Set([...prev, nextPage]));
    } else {
      setIsSummary(true);
    }
  };

  const handleBack = () => {
    if (selectedPage > 0) {
      setDirection("back");
      setSelectedPage((p) => p - 1);
      setIsSummary(false);
    }
  };

  const handleDataChange = (data: FormData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setFormDataAll((prev) => ({ ...prev, ...data }));
  };

  const handlePageChange = async (nextPage: number) => {
    if (nextPage === selectedPage) return;

    // Si saltas hacia adelante, marca las intermedias como visitadas
    if (nextPage > selectedPage) {
      const pagesToMark = Array.from(
        { length: nextPage - selectedPage },
        (_, i) => selectedPage + i + 1
      );
      setVisitedPages((prev) => new Set([...prev, ...pagesToMark]));
    }

    // Guardar datos actuales
    if (formRef.current) {
      const currentFormData = new FormData(formRef.current);
      const formValues: { [key: string]: string | FileList } = {};
      for (const [key, value] of currentFormData.entries()) {
        formValues[key] = value instanceof FileList ? value : String(value);
      }
      handleDataChange(formValues);
    }

    // Validar la página actual antes de cambiar
    if (nextPage > selectedPage && formRef.current) {
      try {
        await validateForm(selectedPage);
      } catch {
        // Ignora errores controlados
      }
    }

    // Marcar la nueva página como visitada
    setVisitedPages((prev) => new Set([...prev, nextPage]));
    setSelectedPage(nextPage);
  };

  // Determina el color de cada ListItem según visitado/validado/errores
  const getListItemColor = (index: number) => {
    // No visitado => gris neutro
    if (!visitedPages.has(index)) return "neutral.800";

    // Tiene errores => amarillo
    if (validationErrors.includes(index)) return "semantic.warning.DEFAULT";

    // Página actual => verde
    if (index === selectedPage) {
      return "semantic.success.DEFAULT";
    }

    // Página anterior validada => azul brand.primary
    if (validatedPages.has(index) && index < selectedPage) {
      return "brand.primary";
    }

    // Visitada pero no validada => amarillo
    return "semantic.warning.DEFAULT";
  };

  // Determina el ícono según estados
  const getListItemIcon = (index: number) => {
    if (!visitedPages.has(index)) {
      // No visitada => círculo gris
      return CircleIcon;
    }
    if (validationErrors.includes(index)) {
      // Visitada con errores => círculo amarillo
      return CircleIcon;
    }
    if (validatedPages.has(index)) {
      // Validada:
      if (index < selectedPage) return CheckIcon; // Anterior validado => check azul
      if (index === selectedPage) return CircleIcon; // Actual validado => círculo verde
    }
    // Visitada pero no validada => círculo amarillo
    return CircleIcon;
  };

  const progressValue = (selectedPage / (totalSteps - 1)) * 100;
  const currentChild = children[selectedPage];
  const title = currentChild?.props?.title || "Default Title";
  const description = currentChild?.props?.description || "Default Description";

  return (
    <Box display="flex" flexDirection={{ base: "column", md: "row" }} h="100vh">
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
        <Image src={logo} alt="Logo" pb={2} width="auto" height="45px" />
        <VStack align="start" spacing={4} mb={6} flexDirection="row">
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
              display="flex"
              alignItems="center"
              fontWeight={index === selectedPage ? "bold" : "regular"}
              cursor="pointer"
              color={getListItemColor(index)}
              onClick={() => handlePageChange(index)}
            >
              <Icon
                as={getListItemIcon(index)}
                boxSize={4}
                color={getListItemColor(index)}
                mr={2}
              />
              {React.isValidElement(child)
                ? (child as ReactElement<{ title: string }>).props.title
                : null}
            </ListItem>
          ))}
        </List>
      </Box>

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
                    onNext: handleFormValidationSuccess,
                    onBack: handleBack,
                    onDataChange: handleDataChange,
                    formData: formData,
                    formRef: formRef,
                    formDataAll: formDataAll,
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
            isLastPage={selectedPage === totalSteps - 1}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
