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
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW={"1200px"} mx="auto" overflow={"auto"}>
        {/* Pasamos los formularios como children del Sidebar */}
        <Sidebar>
          <CompanyInformationForm title="Company Information" />
          <CorporateAddressForm title="Corporate Address" />
          <ContactInformationForm title="Contact Information" />
          <AdditionalDetailsForm title="Additional Details" />
          <OwnerInformationForm title="Owner Information" />
          <BusinessProfileForm title="Business Profile" />
        </Sidebar>
      </Box>
    </ChakraProvider>
  );
}

export default App;
