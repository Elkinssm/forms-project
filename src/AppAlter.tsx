// App.tsx
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "./App.css";

// Importar los formularios
import CompanyInformationForm from "./components/YourBusiness/CompanyInformationForm/CompanyInformationForm";
import CorporateAddressForm from "./components/YourBusiness/CorporateAddressForm/CorporateAddressForm";
import ContactInformationForm from "./components/YourBusiness/ContactInformationForm/ContactInformationForm";
import AdditionalDetailsForm from "./components/YourBusiness/AdditionalDetailsForm/AdditionalDetailsForm";
import OwnerInformationForm from "./components/OwnerInformation/OwnerInformationForm";
import BusinessProfileForm from "./components/BusinessProfile/BusinessProfile";
import Sidebar from "./components/Sidebar/SidebarAlter";
import ControllingOfficerForm from "./components/ControllingOfficer/ControllingOfficer";
import SalesProfileForm from "./components/SalesProfile/SalesProfile";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW={"1200px"} mx="auto" overflow={"auto"}>
        {/* Pasamos los formularios como children del Sidebar */}
        <Sidebar>
          <CompanyInformationForm
            title="Company Information"
            description="Provide details about your company information."
          />
          <CorporateAddressForm
            title="Corporate Address"
            description="Enter the address where your company is legally registered."
          />
          <ContactInformationForm
            title="Contact Information"
            description="Provide contact information for your business."
          />
          <AdditionalDetailsForm
            title="Additional Details"
            description="Add any additional information that is relevant to your business."
          />
          <OwnerInformationForm
            title="Owner Information"
            description="Details about the owners of the company."
          />
          <BusinessProfileForm
            title="Business Profile"
            description="Define your business profile and key activities."
          />
          <ControllingOfficerForm
            title="Controlling Officer"
            description="Information about the controlling officer."
          />
          <SalesProfileForm
            title="Sales Profile"
            description="Provide information about your sales operations."
          />
        </Sidebar>
      </Box>
    </ChakraProvider>
  );
}

export default App;
