// Main.tsx
import React, { useState, useRef, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@chakra-ui/react";
import CompanyInformation from "../YourBusiness/CompanyInformationForm/CompanyInformationForm";
import CorporateAddressForm from "../YourBusiness/CorporateAddressForm/CorporateAddressForm";
import ContactInformationForm from "../YourBusiness/ContactInformationForm/ContactInformationForm";
import AdditionalDetailsForm from "../YourBusiness/AdditionalDetailsForm/AdditionalDetailsForm";
import OwnerInformationForm from "../OwnerInformation/OwnerInformationForm";
import BusinessProfileForm from "../BusinessProfile/BusinessProfile";
import NewForm2 from "../YourBusiness/CompanyInformationForm/CompanyInformationForm";
import Sidebar from "../Sidebar/Sidebar";
import Layout from "./Layout";
import Footer from "./Footer";
import FormHeader from "../FormComponents/FormHeader";

const sections = [
  {
    title: "Business Information",
    subsections: [
      { name: "Company Information", path: "/company-information" },
      { name: "Corporate Address", path: "/corporate-address" },
      { name: "Contact Information", path: "/contact-information" },
      { name: "Additional Details", path: "/additional-details" },
    ],
  },
  {
    title: "Owner Information",
    subsections: [
      { name: "Owner Information", path: "/owner-information" },
      { name: "Business Profile", path: "/business-profile" },
    ],
  },
];

const Main: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [sectionProgress, setSectionProgress] = useState<number[]>(
    sections.map(() => 0) // Inicializa el progreso de cada sección en 0%
  );
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const location = useLocation(); // Para conocer la ruta actual

  useEffect(() => {
    // Actualiza la sección actual según la ruta
    const flatSections = sections.flatMap((section) => section.subsections);
    const currentIndex = flatSections.findIndex(
      (subsection) => subsection.path === location.pathname
    );
    if (currentIndex !== -1) {
      const sectionIndex = sections.findIndex((section) =>
        section.subsections.some(
          (subsection) => subsection.path === location.pathname
        )
      );
      setCurrentSectionIndex(sectionIndex);
      updateSectionProgress(sectionIndex);
    }
  }, [location.pathname]);

  const updateSectionProgress = (sectionIndex: number) => {
    const section = sections[sectionIndex];
    const flatSections = sections.flatMap((section) => section.subsections);

    const visitedCount = section.subsections.reduce((count, subsection) => {
      if (location.pathname === subsection.path) {
        return count + 1;
      }
      return count;
    }, 0);

    const progress = (visitedCount / section.subsections.length) * 100;

    setSectionProgress((prevProgress) => {
      const newProgress = [...prevProgress];
      newProgress[sectionIndex] = progress;
      return newProgress;
    });
  };

  const handleBack = () => {
    const flatSections = sections.flatMap((section) => section.subsections);
    const currentIndex = flatSections.findIndex(
      (subsection) => subsection.path === location.pathname
    );
    if (currentIndex > 0) {
      const prevSectionIndex = currentIndex - 1;
      navigate(flatSections[prevSectionIndex].path);
    }
  };

  const handleNext = () => {
    const flatSections = sections.flatMap((section) => section.subsections);
    const currentIndex = flatSections.findIndex(
      (subsection) => subsection.path === location.pathname
    );
    if (currentIndex < flatSections.length - 1) {
      const nextSectionIndex = currentIndex + 1;
      navigate(flatSections[nextSectionIndex].path);
    }
  };

  const navigateToSection = (sectionIndex: number) => {
    const flatSections = sections.flatMap((section) => section.subsections);
    if (sectionIndex >= 0 && sectionIndex < flatSections.length) {
      navigate(flatSections[sectionIndex].path);
    }
  };

  const handleSectionClick = (sectionIndex: number) => {
    navigateToSection(sectionIndex);
  };

  return (
    <Layout
      sidebar={
        <Sidebar
          sections={sections}
          progressBySection={sectionProgress}
          onSectionClick={handleSectionClick}
        />
      }
      header={
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
          <FormHeader
            title="Business information"
            description="Let’s start with your company’s basic information. [We could add here why the company requests this information]"
          />
        </Box>
      }
      footer={
        <Footer
          onBack={handleBack}
          onNext={handleNext}
          formRef={formRef}
          showBackButton={currentSectionIndex > 0}
          isFirstPage={currentSectionIndex === 0}
        />
      }
    >
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Navigate to="/company-information" />} />
          <Route
            path="/company-information"
            element={
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <CompanyInformation title="" formRef={formRef} />
              </motion.div>
            }
          />
          <Route
            path="/corporate-address"
            element={
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <CorporateAddressForm
                  formRef={formRef}
                  title="CorporateAddressForm"
                />
              </motion.div>
            }
          />
          <Route
            path="/contact-information"
            element={
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <ContactInformationForm
                  formRef={formRef}
                  title="ContactInformationForm"
                />
              </motion.div>
            }
          />
          <Route
            path="/additional-details"
            element={
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <AdditionalDetailsForm
                  formRef={formRef}
                  title="AdditionalDetailsForm"
                />
              </motion.div>
            }
          />
          <Route
            path="/owner-information"
            element={
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <OwnerInformationForm
                  formRef={formRef}
                  title="OwnerInformationForm"
                />
              </motion.div>
            }
          />
          <Route
            path="/business-profile"
            element={
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <BusinessProfileForm
                  formRef={formRef}
                  title="BusinessProfileForm"
                />
              </motion.div>
            }
          />
          <Route
            path="/new-form-2"
            element={
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <NewForm2 formRef={formRef} title="NewForm2" />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

export default Main;
