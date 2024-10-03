import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface FormNavigationProps {
  onBack?: () => void;
  onNext?: () => void;
  formRef: React.RefObject<HTMLFormElement>;
  showBackButton?: boolean;
  buttonSize?: string;
  isFirstPage?: boolean;
}

const FormNavigation: React.FC<FormNavigationProps> = ({
  onBack,
  onNext,
  formRef,
  showBackButton = true,
  isFirstPage = false,
  buttonSize = "md",
}) => {
  const handleNextClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" p={4} gap={4}>
      {showBackButton && onBack && (
        <Button
          onClick={onBack}
          colorScheme="gray"
          leftIcon={<ChevronLeftIcon />}
          variant="outline"
          width={isFirstPage ? "0%" : "45%"}
          size={buttonSize}
        >
          Back
        </Button>
      )}
      <Button
        type="button"
        colorScheme="blue"
        onClick={handleNextClick}
        rightIcon={<ChevronRightIcon />}
        width={isFirstPage ? "100%" : "45%"}
        size={buttonSize}
      >
        Next
      </Button>
    </Box>
  );
};

export default FormNavigation;
