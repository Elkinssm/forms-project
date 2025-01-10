// SectionContent.tsx
import React, { useRef } from "react";
import CompanyInformation from "../YourBusiness/CompanyInformationForm/CompanyInformationForm";
import CorporateAddressForm from "../YourBusiness/CorporateAddressForm/CorporateAddressForm";
import ContactInformationForm from "../YourBusiness/ContactInformationForm/ContactInformationForm";
import AdditionalDetailsForm from "../YourBusiness/AdditionalDetailsForm/AdditionalDetailsForm";
import OwnerInformationForm from "../OwnerInformation/OwnerInformationForm";
import NewForm1 from "../YourBusiness/CompanyInformationForm/CompanyInformationForm";
import NewForm2 from "../YourBusiness/CompanyInformationForm/CompanyInformationForm";

interface SectionContentProps {
  currentSection: number;
  formRef: React.RefObject<HTMLFormElement>;
}

const SectionContent: React.FC<SectionContentProps> = ({
  currentSection,
  formRef,
}) => {
  switch (currentSection) {
    case 0:
      return <CompanyInformation title="" formRef={formRef} />;
    case 1:
      return (
        <CorporateAddressForm formRef={formRef} title="CorporateAddressForm" />
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
        <OwnerInformationForm formRef={formRef} title="OwnerInformationForm" />
      );
    case 5:
      return <NewForm1 formRef={formRef} title="NewForm1" />;
    case 6:
      return <NewForm2 formRef={formRef} title="NewForm2" />;
    default:
      return <CompanyInformation title="" formRef={formRef} />;
  }
};

export default SectionContent;
