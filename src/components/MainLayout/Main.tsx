import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CompanyInformation from "../YourBusiness/CompanyInformationForm/CompanyInformationForm";
import CorporateAddressForm from "../YourBusiness/CorporateAddressForm/CorporateAddressForm";
import ContactInformationForm from "../YourBusiness/ContactInformationForm/ContactInformationForm";
import AdditionalDetailsForm from "../YourBusiness/AdditionalDetailsForm/AdditionalDetailsForm";
import OwnerInformationForm from "../OwnerInformation/OwnerInformationForm";
import NewForm1 from "../YourBusiness/CompanyInformationForm/CompanyInformationForm";
import NewForm2 from "../YourBusiness/CompanyInformationForm/CompanyInformationForm";
import Sidebar from "../Sidebar/Sidebar";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";

const sections = [
  {
    title: "Business Information",
    subsections: [
      { name: "Company Information", path: "/company-information" },
      { name: "Corporate Address", path: "/corporate-address" },
      { name: "Contact Information", path: "/contact-information" },
      { name: "Additional Details", path: "/additional-details" },
      { name: "Owner Information", path: "/owner-information" },
      { name: "Business Profile", path: "/business-profile" },
    ],
  },
  {
    title: "New Section",
    subsections: [
      { name: "New Form 1", path: "/new-form-1" },
      { name: "New Form 2", path: "/new-form-2" },
    ],
  },
];

const Main: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleBack = () => {
    if (currentSection > 0) {
      setCurrentSection((prevSection) => prevSection - 1);
      navigateToSection(currentSection - 1);
    }
  };

  const handleNext = () => {
    if (
      currentSection <
      sections.flatMap((section) => section.subsections).length - 1
    ) {
      setCurrentSection((prevSection) => prevSection + 1);
      navigateToSection(currentSection + 1);
    }
  };

  const navigateToSection = (sectionIndex: number) => {
    const flatSections = sections.flatMap((section) => section.subsections);
    if (sectionIndex >= 0 && sectionIndex < flatSections.length) {
      navigate(flatSections[sectionIndex].path);
    }
  };

  const handleSectionClick = (index: number) => {
    setCurrentSection(index);
    navigateToSection(index);
  };

  const renderSectionContent = () => {
    switch (currentSection) {
      case 0:
        return <CompanyInformation title="" formRef={formRef} />;
      case 1:
        return (
          <CorporateAddressForm
            formRef={formRef}
            title="CorporateAddressForm"
          />
        );
      case 2:
        return (
          <ContactInformationForm
            formRef={formRef}
            title="ContactInformationForm"
          />
        );
      case 3:
        return (
          <AdditionalDetailsForm
            formRef={formRef}
            title="AdditionalDetailsForm"
          />
        );
      case 4:
        return (
          <OwnerInformationForm
            formRef={formRef}
            title="OwnerInformationForm"
          />
        );
      case 5:
        return <NewForm1 formRef={formRef} title="NewForm1" />;
      case 6:
        return <NewForm2 formRef={formRef} title="NewForm2" />;
      default:
        return <CompanyInformation title="" formRef={formRef} />;
    }
  };

  const totalSections = sections.flatMap(
    (section) => section.subsections
  ).length;
  const progress = ((currentSection + 1) / totalSections) * 100;

  return (
    <Layout
      sidebar={
        <Sidebar
          sections={sections}
          progress={progress}
          onSectionClick={handleSectionClick}
        />
      }
      header={
        <Header
          title={"Business information"}
          description={
            "Let’s start with your company’s basic information. [We could add here why the company requests this information]"
          }
        />
      }
      footer={
        <Footer
          onBack={handleBack}
          onNext={handleNext}
          formRef={formRef}
          showBackButton={currentSection > 0}
          isFirstPage={currentSection === 0}
        />
      }
    >
      <Routes>
        <Route path="/" element={renderSectionContent()} />
        <Route
          path="/company-information"
          element={<CompanyInformation title="" formRef={formRef} />}
        />
        <Route
          path="/corporate-address"
          element={
            <CorporateAddressForm
              formRef={formRef}
              title="CorporateAddressForm"
            />
          }
        />
        <Route
          path="/contact-information"
          element={
            <ContactInformationForm
              formRef={formRef}
              title="ContactInformationForm"
            />
          }
        />
        <Route
          path="/additional-details"
          element={
            <AdditionalDetailsForm
              formRef={formRef}
              title="AdditionalDetailsForm"
            />
          }
        />
        <Route
          path="/owner-information"
          element={
            <OwnerInformationForm
              formRef={formRef}
              title="OwnerInformationForm"
            />
          }
        />
        <Route
          path="/new-form-1"
          element={<NewForm1 formRef={formRef} title="NewForm1" />}
        />
        <Route
          path="/new-form-2"
          element={<NewForm2 formRef={formRef} title="NewForm2" />}
        />
      </Routes>
    </Layout>
  );
};

export default Main;
