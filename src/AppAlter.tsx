import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "./App.css";
import CompanyInformationForm from "./components/YourBusiness/CompanyInformationForm/CompanyInformationForm";
import CorporateAddressForm from "./components/YourBusiness/CorporateAddressForm/CorporateAddressForm";
import ContactInformationForm from "./components/YourBusiness/ContactInformationForm/ContactInformationForm"; // Importamos el schema
import AdditionalDetailsForm from "./components/YourBusiness/AdditionalDetailsForm/AdditionalDetailsForm";
import OwnerInformationForm from "./components/OwnerInformation/OwnerInformationForm";
import BusinessProfileForm from "./components/BusinessProfile/BusinessProfile";
import Sidebar from "./components/Sidebar/SidebarAlter";
import ControllingOfficerForm from "./components/ControllingOfficer/ControllingOfficer";
import SalesProfileForm from "./components/SalesProfile/SalesProfile";
import { contactFormSchema } from "./components/YourBusiness/ContactInformationForm/contactFormSchema";
import { corporateAddresFormSchema } from "./components/YourBusiness/CorporateAddressForm/corporateAddresFormSchema";
import { companyInformationScheme } from "./components/YourBusiness/CompanyInformationForm/companyInformationSchema";
import { additionalInformationSchema } from "./components/YourBusiness/AdditionalDetailsForm/AdditionalInformationSchema";
import { ownerInformationScheme } from "./components/OwnerInformation/ownerInformationScheme";
import { businesProfileSchema } from "./components/BusinessProfile/businessProfileSchema";
import { controllingOfficerSchema } from "./components/ControllingOfficer/controllingOfficerSchema";
import { salesProfileSchema } from "./components/SalesProfile/salesProfileSchema";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW={"1200px"} mx="auto" overflow={"auto"}>
        {/* Pasamos los formularios como children del Sidebar */}
        <Sidebar>
          <CorporateAddressForm
            title="Corporate Information"
            description="Enter the Information where your company is legally registered."
            validationSchema={corporateAddresFormSchema}
          />
          <CompanyInformationForm
            title="DBA Information"
            description="Provide details about your company information."
            validationSchema={companyInformationScheme}
          />
          <ContactInformationForm
            title="Primary Contact"
            description="Provide contact information for your business."
            validationSchema={contactFormSchema}
          />
          <AdditionalDetailsForm
            title="Additional Details"
            description="Add any additional information relevant to your business."
            validationSchema={additionalInformationSchema}
          />
          <OwnerInformationForm
            title="Owner Information"
            description="The following information for each individual who owns 25% or more of the equity."
            validationSchema={ownerInformationScheme}
          />
          <BusinessProfileForm
            title="Business Profile"
            description="Define your business profile and key activities."
            validationSchema={businesProfileSchema}
          />
          <ControllingOfficerForm
            title="Controlling Officer"
            description="Complete the following information for one individual with significant responsibility."
            validationSchema={controllingOfficerSchema}
          />
          <SalesProfileForm
            title="Sales Profile"
            description="Provide information about your sales operations."
            validationSchema={salesProfileSchema}
          />
        </Sidebar>
      </Box>
    </ChakraProvider>
  );
}

export default App;
