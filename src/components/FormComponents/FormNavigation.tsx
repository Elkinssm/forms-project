import React from "react";
import { Box, Button, Spacer } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface FormNavigationProps {
  onBack?: () => void;
  onNext?: () => void;
  formRef: React.RefObject<HTMLFormElement>;
  showBackButton?: boolean;
  buttonSize?: string; // Nueva propiedad para el tamaño del botón
}

const FormNavigation: React.FC<FormNavigationProps> = ({
  onBack,
  onNext,
  formRef,
  showBackButton = true,
}) => {
  const handleNextClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" p={4}>
      <Box w={"45%"}>
        {showBackButton && onBack && (
          <Button
            onClick={onBack}
            colorScheme="gray"
            leftIcon={<ChevronLeftIcon />}
            variant={"outline"}
            width="full"
          >
            Back
          </Button>
        )}
      </Box>

      <Box w={"45%"}>
        {onNext && (
          <Button
            type="button"
            onClick={handleNextClick}
            rightIcon={<ChevronRightIcon />}
            width="full"
          >
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default FormNavigation;
