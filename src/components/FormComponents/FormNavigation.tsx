import React from "react";
import { Box, Button } from "@chakra-ui/react";

interface FormNavigationProps {
  onBack?: () => void;
  onNext?: () => void;
  formRef: React.RefObject<HTMLFormElement>;
  showBackButton?: boolean;
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
      {showBackButton && onBack && (
        <Button onClick={onBack} colorScheme="gray">
          Back
        </Button>
      )}
      {onNext && (
        <Button type="button" colorScheme="blue" onClick={handleNextClick}>
          Next
        </Button>
      )}
    </Box>
  );
};

export default FormNavigation;
