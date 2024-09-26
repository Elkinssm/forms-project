import React, { useState, ReactElement, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import FormNavigation from "../FormComponents/FormNavigation";

interface SectionProps {
  section: {
    title: string;
    children: ReactElement[];
  };
  sectionIndex: number;
  onSectionComplete: () => void;
  formData: { [key: string]: unknown };
  handleDataChange: (data: { [key: string]: unknown }) => void;
}

const Section: React.FC<SectionProps> = ({
  section,
  sectionIndex,
  onSectionComplete,
  formData,
  handleDataChange,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<"next" | "back">("next");
  const formRef = useRef<HTMLFormElement>(null);

  const handleNext = () => {
    if (currentStep < section.children.length - 1) {
      setDirection("next");
      setCurrentStep((prev) => prev + 1);
    } else {
      onSectionComplete(); 
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection("back");
      setCurrentStep((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentStep]);

  return (
    <Box
      flex="1"
      p={6}
      overflowY="auto"
      maxH="calc(100vh - 120px)"
      position="relative"
      zIndex={0}
    >
      <AnimatePresence initial={false} mode="wait">
        {section.children.map((child, index) =>
          currentStep === index ? (
            <motion.div
              key={`${sectionIndex}-${index}`} // Asegúrate de tener una clave única
              initial={{
                opacity: 0,
                y: direction === "next" ? 50 : -50,
              }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: direction === "next" ? -50 : 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {React.cloneElement(child, {
                onNext: handleNext,
                onBack: handleBack,
                onDataChange: handleDataChange,
                formData: formData,
                formRef: formRef,
              })}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
      <Box flex="0" p={4} bg="white" boxShadow="md">
        <FormNavigation
          onBack={handleBack}
          onNext={handleNext}
          formRef={formRef}
          showBackButton={currentStep > 0}
          isFirstPage={currentStep === 0}
        />
      </Box>
    </Box>
  );
};

export default Section;
