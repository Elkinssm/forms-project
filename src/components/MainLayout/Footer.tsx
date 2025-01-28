import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface FooterProps {
  onBack?: () => void;
  onNext?: () => void;
  formRef?: React.RefObject<HTMLFormElement>;
  showBackButton?: boolean;
  buttonSize?: string;
  isFirstPage?: boolean;
}

const Footer: React.FC<FooterProps> = ({
  onBack,
  onNext,
  formRef,
  showBackButton = true,
  isFirstPage = false,
  buttonSize = "md",
}) => {
  const handleNextClick = () => {
    if (formRef?.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
    if (onNext) {
      onNext();
    }
  };

  return (
    <Box
      p="4"
      bg="gray.100"
      display="flex"
      justifyContent="space-between"
      gap={4}
    >
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

export default Footer;
